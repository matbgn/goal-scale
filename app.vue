<script setup>
import { ref, computed, nextTick } from 'vue';
import { LucideRocket, LucidePrinter } from "lucide-vue-next";
import goalFormSchema from '@/schema/goalFormSchema';

const isPrinting = ref(false);
const goalForm = ref(null);

const formData = ref({});

const cleanedFormSchema = computed(() => {
  const schema = JSON.parse(JSON.stringify(goalFormSchema));

  const removeBuilder = (obj) => {
    if (obj === null || typeof obj !== 'object') {
      return;
    }

    for (const key in obj) {
      if (key === 'builder') {
        delete obj[key];
      } else {
        removeBuilder(obj[key]);
      }
    }
  }

  removeBuilder(schema);

  if (schema.form && schema.form.steps) {
    schema.steps = schema.form.steps;
    delete schema.form.steps;
  }

  return schema;
});
const exportJson = () => {
  try {
    // Collect current form values (already bound via v-model="formData")
    const data = {
      schema: cleanedFormSchema.value, // normalized schema (no builder, steps moved)
      values: formData.value ?? {}
    };

    const json = JSON.stringify(data, null, 2);

    // Build a filename with timestamp
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `goal-scale-export-${ts}.json`;

    // Trigger browser download
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    // For Firefox it needs to be added to the DOM
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (e) {
    // Basic safety; optionally surface to user via toast later
    // eslint-disable-next-line no-console
    console.error('Failed to export JSON', e);
  }
};

const importJson = (event) => {
  const file = event.target.files[0];
  if (!file) {
    console.log('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      console.log('File read successfully. Parsing JSON...');
      const data = JSON.parse(e.target.result);
      console.log('Parsed data:', data);

      if (data && data.values) {
        console.log('Found "values" key. Preparing to import:', data.values);
        // Clear the existing form data by replacing it with an empty object
        formData.value = {};
        
        // Use a timeout to allow the DOM to update after clearing
        setTimeout(() => {
          console.log('Assigning new values...');
          // Create a new object to avoid potential reactivity issues with the old one
          const newValues = { ...data.values };
          formData.value = newValues;
          console.log('Import complete. Final formData:', JSON.parse(JSON.stringify(formData.value)));

          // Try to force a re-render of the Vueform component
          nextTick(() => {
            if (goalForm.value && typeof goalForm.value.reset === 'function') {
              console.log('Attempting to reset Vueform...');
              goalForm.value.reset();
              
              // As a fallback, let's also try updating the model directly on the component instance
              // This can sometimes be more effective if the component has its own internal state management
              goalForm.value.update(formData.value);
              console.log('Vueform reset and update called.');
            } else {
              console.warn('Could not find goalForm ref or its reset/update method.');
            }
          });
        }, 0);

      } else {
        console.error("Import failed: Invalid JSON format, 'values' key not found.");
      }
    } catch (err) {
      console.error("Import failed: Could not parse JSON file.", err);
    }
  };
  reader.onerror = (err) => {
    console.error('Error reading file:', err);
  };
  reader.readAsText(file);
};

const importInput = ref(null);
const triggerImport = () => {
  importInput.value?.click();
};

const printToPDF = async () => {
  if (isPrinting.value) return;
  isPrinting.value = true;
  try {
  // Dynamically import client-side libraries
  const { default: jsPDF } = await import('jspdf');
  const { default: html2canvas } = await import('html2canvas');

  // Create an offscreen container with page-aware styles
  const printContent = document.createElement('div');
  // Keep a safe printable area (A4: 210x297mm, leave 15mm margins)
  printContent.style.width = '180mm'; // content width (210 - 2*15)
  printContent.style.padding = '0';   // padding handled by PDF margins
  printContent.style.boxSizing = 'content-box';
  printContent.style.backgroundColor = '#fff';
  printContent.style.position = 'absolute';
  printContent.style.left = '-9999px';
  printContent.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
  printContent.style.color = '#222';
  printContent.style.lineHeight = '1.5';
  // Avoid element splitting inside lists/paragraphs/headings
  printContent.style.wordBreak = 'normal';
  printContent.style.overflowWrap = 'anywhere';

  // Inject CSS to control page breaks and avoid cutting content
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .pdf-root {
      width: 100%;
      font-size: 11pt;
      padding-top: 3mm;     /* global top breathing room */
      padding-bottom: 3mm;  /* global bottom breathing room */
    }
    h1.pdf-title {
      font-size: 16pt;
      font-weight: 600;
      text-align: center;
      margin: 0 0 10mm 0;
      padding-top: 3mm; /* more headroom for ascenders */
      line-height: 1.25; /* tighter than body but with top padding avoids clipping */
    }
    .pdf-section {
      page-break-inside: avoid;
      break-inside: avoid;
      margin: 0 0 7mm 0;
      padding-bottom: 2mm; /* extra internal padding to avoid bottom cropping in raster */
      border-bottom: 0.01mm solid transparent; /* stabilizes raster box height in some engines */
    }
    .pdf-section h2 {
      font-size: 11pt;
      letter-spacing: .5px;
      font-weight: 700;
      margin: 0 0 3mm 0;
    }
    .pdf-section p {
      margin: 0 0 4mm 0;
    }
    .pdf-section ul {
      margin: 0 0 4mm 0;
      padding-left: 5mm;
    }
    .pdf-section li {
      margin: 0 0 2mm 0;
      line-height: 1.45;
    }
    .pdf-footer {
      page-break-inside: avoid;
      break-inside: avoid;
      text-align: right;
      font-size: 9pt;
      margin-top: 6mm;
      color: #555;
    }
    /* Prevent headings being last line of a page */
    .pdf-keep-with-next {
      page-break-after: avoid;
      break-after: avoid;
    }
  `;
  document.head.appendChild(styleEl);
  document.body.appendChild(printContent);

  // Build HTML with consistent, CSS-driven spacing (no inline margins)
  // Ensure a visible title at the top of the report
  let htmlContent = `<div class="pdf-root"><h1 class="pdf-title pdf-keep-with-next">Goal Scale Report</h1>`;
  for (const key in cleanedFormSchema.value.schema) {
    const element = cleanedFormSchema.value.schema[key];
    const value = formData.value[element.name];

    // Static heading or paragraph (use classes to control spacing)
    if (element.type === 'static' && (element.tag === 'h2' || element.tag === 'p')) {
      htmlContent += `<div class="pdf-section"><${element.tag} class="pdf-keep-with-next">${element.content}</${element.tag}></div>`;
    }
    // Skip "list" elements in schema
    else if (element.type === 'list') {
      continue;
    }
    // Labeled elements with value
    else if (element.label && value !== undefined && value !== null && value !== '') {
      // Do NOT print the element label as a heading in the PDF.
      // Only render the user's answer/value so that static titles and descriptive paragraphs
      // from the schema remain, without additional input labels.
      htmlContent += `<div class="pdf-section">`;
      if (Array.isArray(value)) {
        htmlContent += '<ul class="pdf-list">';
        value.forEach(item => {
          if (typeof item === 'object' && item !== null) {
            if (item.text_1 !== undefined) {
              htmlContent += `<li><strong>${item.text_1}</strong></li>`;
            } else if (item.value !== undefined) {
              htmlContent += `<li><strong>${item.value}</strong></li>`;
            } else {
              htmlContent += `<li><strong>${JSON.stringify(item)}</strong></li>`;
            }
          } else if (item !== undefined && item !== null && item !== '') {
            htmlContent += `<li><strong>${item}</strong></li>`;
          }
        });
        htmlContent += '</ul>';
      } else {
        htmlContent += `<p><strong>${value}</strong></p>`;
      }
      htmlContent += `</div>`;
    }
  }
  htmlContent += `<p class="pdf-footer"><i>Generated on: ${new Date().toLocaleString()}</i></p></div>`;
  printContent.innerHTML = htmlContent;

  // Strategy change:
  // 1) Render each .pdf-section separately to a canvas
  // 2) Place full sections on pages without splitting mid-line
  // 3) If a section is taller than a page, slice that section only
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  // margins for positioning content (must match the 180mm container width)
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // helper to render a node to canvas at fixed scale
  const renderNode = (node) => html2canvas(node, {
    scale: 3, // higher DPI to reduce rounding/cropping artifacts
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    windowWidth: node.scrollWidth,
    scrollY: 0 // avoid negative scroll offsets impacting rasterization
  });

  // Exclude .pdf-footer from the main loop; it is rendered separately later
  const sections = Array.from(printContent.querySelectorAll('.pdf-root > .pdf-section, .pdf-root > .pdf-title'));
  let cursorMmY = 15; // start after top margin

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // Special handling for the title: render it at top of first page with proper spacing
    if (section.classList.contains('pdf-title')) {
      // Temporarily inflate raster box to prevent edge clipping
      const prevCss = section.getAttribute('style') || '';
      section.style.paddingTop = '3mm';
      section.style.paddingBottom = '3mm';
      // eslint-disable-next-line no-await-in-loop
      const titleCanvas = await renderNode(section);
      // Restore original inline style
      section.setAttribute('style', prevCss);
      // Aspect-ratio based placement to avoid rounding-induced cropping
      const titleRatio = titleCanvas.height / titleCanvas.width;
      const placedTitleHeight = +(contentWidth * titleRatio + 2.2).toFixed(2);

      const titleData = titleCanvas.toDataURL('image/png');
      // Extra nudge down to avoid any top-edge clipping from PDF renderer
      const titleY = +(cursorMmY + 1.4).toFixed(2);
      pdf.addImage(titleData, 'PNG', margin, titleY, contentWidth, placedTitleHeight);
      // Reserve spacing after title (match CSS 10mm)
      cursorMmY = +(titleY + placedTitleHeight + 10).toFixed(2);
      continue;
    }

    // Ensure headings don't orphan: if section starts with h2 and little room left, push to next page
    const startsWithH2 = !!section.querySelector('h2:first-child');
    if (startsWithH2 && (pageHeight - cursorMmY - margin) < 30 && cursorMmY !== margin) {
      pdf.addPage();
      cursorMmY = margin;
    }

    // Render section to canvas
    // eslint-disable-next-line no-await-in-loop
    const secCanvas = await renderNode(section);
    const pxPerMm = secCanvas.width / contentWidth;
    const mmPerPx = 1 / pxPerMm;

    const secHeightPx = secCanvas.height;
    // add tiny bleed in pixels to compensate for font descenders being clipped by rounding
    const bleedPx = 4;
    const secHeightMm = (secHeightPx + bleedPx) * mmPerPx;

    // If whole section fits, place it
    if (secHeightMm <= (pageHeight - cursorMmY - margin)) {
      const data = secCanvas.toDataURL('image/png');
      // Use aspect ratio from the raster to compute placed height; add small tolerance
      const secRatio = secCanvas.height / secCanvas.width;
      const remainingMm = pageHeight - cursorMmY - margin - 1.0; // keep 1mm safety from bottom
      const placedHeightMm = Math.min(+(contentWidth * secRatio + 0.8).toFixed(2), remainingMm);
      pdf.addImage(data, 'PNG', margin, +cursorMmY.toFixed(2), contentWidth, placedHeightMm);
      cursorMmY = +(cursorMmY + placedHeightMm + 2).toFixed(2); // small spacing
      continue;
    }

    // Otherwise slice the section into page chunks
    let drawnPx = 0;
    while (drawnPx < secHeightPx) {
      const remainingMm = pageHeight - cursorMmY - margin;
      const remainingPx = Math.max(remainingMm * pxPerMm, 0);
      // If no space on current page, go to new page
      if (remainingPx < 10) { // threshold to avoid near-zero fit
        pdf.addPage();
        cursorMmY = margin;
      }

      const thisSlicePx = Math.min(secHeightPx - drawnPx, (pageHeight - cursorMmY - margin) * pxPerMm);

      // Increase overlap to avoid visible seam and clipping of descenders
      const overlapPx = 4;
      const adjustedSlicePx = Math.max(thisSlicePx + overlapPx, 1);

      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = secCanvas.width;
      sliceCanvas.height = adjustedSlicePx + bleedPx; // include bleed on bottom
      const sctx = sliceCanvas.getContext('2d');
      sctx.drawImage(
        secCanvas,
        0, Math.max(drawnPx - overlapPx, 0),
        secCanvas.width, adjustedSlicePx + bleedPx,
        0, 0,
        secCanvas.width, adjustedSlicePx + bleedPx
      );

      // Compute placed height from slice aspect ratio to avoid mm-per-px rounding issues
      const sliceRatio = sliceCanvas.height / sliceCanvas.width;
      const remainingMmForSlice = pageHeight - cursorMmY - margin - 1.0; // keep 1mm safety from bottom
      const placedHeightMm = Math.min(+(contentWidth * sliceRatio + 0.8).toFixed(2), remainingMmForSlice);
      const pageData = sliceCanvas.toDataURL('image/png');
      pdf.addImage(pageData, 'PNG', margin, +cursorMmY.toFixed(2), contentWidth, placedHeightMm);

      drawnPx += adjustedSlicePx;
      cursorMmY = +(cursorMmY + placedHeightMm).toFixed(2);

      // If more to draw, go to next page
      if (drawnPx < secHeightPx) {
        pdf.addPage();
        cursorMmY = margin;
      } else {
        // spacing after section
        if ((pageHeight - cursorMmY - margin) > 2) cursorMmY = +(cursorMmY + 2).toFixed(2);
      }
    }
  }

  // Render footer separately at the bottom with safe margins
  const footerEl = printContent.querySelector('.pdf-footer');
  if (footerEl) {
    // Temporarily inflate raster box to prevent bottom clipping in canvas
    const prevCss = footerEl.getAttribute('style') || '';
    footerEl.style.paddingTop = '2.5mm';
    footerEl.style.paddingBottom = '2.5mm';
    const footerCanvas = await renderNode(footerEl);
    // Restore original style
    footerEl.setAttribute('style', prevCss);
    const footerRatio = footerCanvas.height / footerCanvas.width;
    const footerData = footerCanvas.toDataURL('image/png');
    const placedFooterHeight = +(contentWidth * footerRatio + 2.0).toFixed(2);
    // If insufficient space on current page, move footer to fresh page
    const remainingForFooter = pageHeight - cursorMmY - margin;
    if (remainingForFooter < placedFooterHeight + 2) {
      pdf.addPage();
      cursorMmY = margin;
    }
    // Place footer anchored near bottom with 1.4mm safety
    const footerY = Math.min(pageHeight - margin - placedFooterHeight - 1.4, Math.max(cursorMmY, margin));
    pdf.addImage(footerData, 'PNG', margin, +footerY.toFixed(2), contentWidth, placedFooterHeight);
  }

  pdf.save("goal-plan.pdf");
 
  // Cleanup
  document.body.removeChild(printContent);
  document.head.removeChild(styleEl);
} finally {
  isPrinting.value = false;
}
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-4xl font-bold text-blue-500 mb-4">Goal Scale</h1>
    <div id="form-container">
      <ClientOnly>
        <Vueform ref="goalForm" v-bind="cleanedFormSchema" v-model="formData" />
      </ClientOnly>
    </div>

    <!-- Actions row: buttons horizontally with small gap, print first -->
    <div class="flex items-center gap-3 mb-4">
      <button
        @click="printToPDF"
        :disabled="isPrinting"
        class="px-3 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 transition-opacity hover:opacity-90 hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <LucidePrinter class="w-5 h-5" />
        <span>Print to PDF</span>
        <span v-if="isPrinting" class="inline-flex items-center ml-2">
          <span class="spinner w-4 h-4 border-2 border-white/60 border-t-white rounded-full animate-spin"></span>
        </span>
      </button>

      <button
        @click="exportJson"
        class="px-3 py-2 bg-[#07bf9b] text-white rounded-lg flex items-center gap-2 transition-opacity hover:opacity-90 hover:cursor-pointer"
      >
        <LucideRocket class="w-5 h-5" />
        <span>Export JSON</span>
      </button>
      
      <button
        @click="triggerImport"
        class="px-3 py-2 bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-opacity hover:opacity-90 hover:cursor-pointer"
      >
        <LucideRocket class="w-5 h-5" />
        <span>Import JSON</span>
      </button>
      <input type="file" @change="importJson" accept=".json" class="hidden" ref="importInput" />
    </div>
  </div>
</template>
<style>
/* Basic styling for the generated report */
.prose {
  font-family: sans-serif;
  line-height: 1.6;
  color: #333;
}

.prose h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.prose h2 {
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.prose p,
.prose ul {
  margin-bottom: 1em;
}

.prose ul {
  list-style-type: disc;
  margin-left: 20px;
}
/* spinner fallback if Tailwind's animate-spin isn't present */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  display: inline-block;
  border-right-color: transparent !important;
  animation: spin 0.8s linear infinite;
}
</style>
