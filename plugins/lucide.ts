import { createApp } from 'vue'
import { createIcons, icons } from 'lucide-vue-next'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(createIcons, { icons })
})