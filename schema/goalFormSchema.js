export default {
  schema: {
    h2: {
      name: "h2",
      type: "static",
      tag: "h2",
      content: "GOAL",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p: {
      name: "p",
      type: "static",
      tag: "p",
      content: "<div>Who I choose to be / what I choose to be</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    text: {
      name: "text",
      type: "text",
      builder: {
        type: "text",
        label: "Text input"
      },
      rules: [
        "required"
      ],
      label: "Define your primary objective or aspiration"
    },
    h2_1: {
      name: "h2_1",
      type: "static",
      tag: "h2",
      content: "PURPOSES",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_1: {
      name: "p_1",
      type: "static",
      tag: "p",
      content: "<div>What is the main motivation for carrying out the goal</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    nestedList: {
      name: "nestedList",
      type: "list",
      element: {
        type: "object",
        name: "container",
        builder: {
          type: "container"
        },
        schema: {
          text_1: {
            name: "text_1",
            type: "text",
            label: "Enter a purpose",
            builder: {
              type: "text",
              label: "Text input"
            }
          }
        }
      },
      builder: {
        type: "nestedList",
        label: "Nested list"
      },
      label: "List the reasons why this goal is important to you"
    }
  },
  form: {
    nesting: true,
    steps: {
      page0: {
        label: "Step 1",
        elements: [
          "h2",
          "p",
          "text"
        ],
        builder: {
          type: "steps"
        }
      },
      page1: {
        label: "Step 2",
        elements: [
          "h2_1",
          "p_1",
          "nestedList"
        ],
        builder: {
          type: "steps"
        }
      }
    }
  },
  export: {
    output: "inline",
    api: "options"
  },
  builder: {
    name: "MyForm",
    elements: []
  }
}