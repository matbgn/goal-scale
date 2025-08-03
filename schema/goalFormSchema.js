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
      content: "<div>Who I choose to be / what I choose to be<br>The prime intention as a basic purpose for this life on earth.</div>",
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
    },
    h2_2: {
      name: "h2_2",
      type: "static",
      tag: "h2",
      content: "POLICIES / PRINCIPLES",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_2: {
      name: "p_2",
      type: "static",
      tag: "p",
      content: "<div>How I choose to become it</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_2: {
      name: "textarea_2",
      type: "textarea",
      label: "Define your policies or principles",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_3: {
      name: "h2_3",
      type: "static",
      tag: "h2",
      content: "IDEAL SCENE",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_3: {
      name: "p_3",
      type: "static",
      tag: "p",
      content: "<div>What I choose to have when I achieve this goal</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_3: {
      name: "textarea_3",
      type: "textarea",
      label: "Describe your ideal scene",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_4: {
      name: "h2_4",
      type: "static",
      tag: "h2",
      content: "CURRENT SCENE",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_4: {
      name: "p_4",
      type: "static",
      tag: "p",
      content: "<div>What I have now</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_4: {
      name: "textarea_4",
      type: "textarea",
      label: "Describe your current scene",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_5: {
      name: "h2_5",
      type: "static",
      tag: "h2",
      content: "DEVIATIONS",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_5: {
      name: "p_5",
      type: "static",
      tag: "p",
      content: "<div>List of differences between the current image and the ideal image</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    list_5: {
      name: "list_5",
      type: "list",
      element: {
        type: "text"
      },
      label: "List the deviations",
      builder: {
        type: "list",
        label: "List"
      }
    },
    h2_6: {
      name: "h2_6",
      type: "static",
      tag: "h2",
      content: "SITUATION",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_6: {
      name: "p_6",
      type: "static",
      tag: "p",
      content: "<div>The main deviation from the ideal image</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_6: {
      name: "textarea_6",
      type: "textarea",
      label: "Describe the situation",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_7: {
      name: "h2_7",
      type: "static",
      tag: "h2",
      content: "VALUABLE FINAL PRODUCT(S)",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_7: {
      name: "p_7",
      type: "static",
      tag: "p",
      content: "<div>The result needed to correct the situation — something that can be exchanged outside the area for something in return</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_7: {
      name: "textarea_7",
      type: "textarea",
      label: "Define your valuable final product(s)",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_8: {
      name: "h2_8",
      type: "static",
      tag: "h2",
      content: "STATISTICS",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_8: {
      name: "p_8",
      type: "static",
      tag: "p",
      content: "<div>The figures to be achieved to correct the situation</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_8: {
      name: "textarea_8",
      type: "textarea",
      label: "Define the statistics",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_9: {
      name: "h2_9",
      type: "static",
      tag: "h2",
      content: "WHY",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_9: {
      name: "p_9",
      type: "static",
      tag: "p",
      content: "<div>The main cause(s) of the situation</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_9: {
      name: "textarea_9",
      type: "textarea",
      label: "Explain the cause(s)",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_10: {
      name: "h2_10",
      type: "static",
      tag: "h2",
      content: "PLAN",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_10: {
      name: "p_10",
      type: "static",
      tag: "p",
      content: "<div>Brilliant idea to correct the situation</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    textarea_10: {
      name: "textarea_10",
      type: "textarea",
      label: "Outline your plan",
      builder: {
        type: "textarea",
        label: "Textarea"
      }
    },
    h2_11: {
      name: "h2_11",
      type: "static",
      tag: "h2",
      content: "PROGRAM",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_11: {
      name: "p_11",
      type: "static",
      tag: "p",
      content: "<div>The big solution to a problem given by a defined plan. The little problems inside that big solution are solved by projects and inside the projects the littler-littler problems are solved by orders</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    list_11: {
      name: "list_11",
      type: "list",
      element: {
        type: "textarea"
      },
      label: "Define the program",
      builder: {
        type: "list",
        label: "List"
      }
    },
    h2_12: {
      name: "h2_12",
      type: "static",
      tag: "h2",
      content: "PROJECTS",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_12: {
      name: "p_12",
      type: "static",
      tag: "p",
      content: "<div>These are a series of guiding steps which if followed will result in a full and successful accomplishment of the program target</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    list_12: {
      name: "list_12",
      type: "list",
      element: {
        type: "textarea"
      },
      label: "Define the projects",
      builder: {
        type: "list",
        label: "List"
      }
    },
    h2_13: {
      name: "h2_13",
      type: "static",
      tag: "h2",
      content: "ORDERS",
      builder: {
        type: "h2",
        label: "H2 header"
      }
    },
    p_13: {
      name: "p_13",
      type: "static",
      tag: "p",
      content: "<div>What are issued to get the actions called done so that a valuable final product results</div>",
      builder: {
        type: "p",
        label: "Paragraph"
      }
    },
    list_13: {
      name: "list_13",
      type: "list",
      element: {
        type: "textarea"
      },
      label: "Define the orders",
      builder: {
        type: "list",
        label: "List"
      }
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
      },
      page2: {
        label: "Step 3",
        elements: [
          "h2_2",
          "p_2",
          "textarea_2"
        ],
        builder: {
          type: "steps"
        }
      },
      page3: {
        label: "Step 4",
        elements: [
          "h2_3",
          "p_3",
          "textarea_3"
        ],
        builder: {
          type: "steps"
        }
      },
      page4: {
        label: "Step 5",
        elements: [
          "h2_4",
          "p_4",
          "textarea_4"
        ],
        builder: {
          type: "steps"
        }
      },
      page5: {
        label: "Step 6",
        elements: [
          "h2_5",
          "p_5",
          "list_5"
        ],
        builder: {
          type: "steps"
        }
      },
      page6: {
        label: "Step 7",
        elements: [
          "h2_6",
          "p_6",
          "textarea_6"
        ],
        builder: {
          type: "steps"
        }
      },
      page7: {
        label: "Step 8",
        elements: [
          "h2_7",
          "p_7",
          "textarea_7"
        ],
        builder: {
          type: "steps"
        }
      },
      page8: {
        label: "Step 9",
        elements: [
          "h2_8",
          "p_8",
          "textarea_8"
        ],
        builder: {
          type: "steps"
        }
      },
      page9: {
        label: "Step 10",
        elements: [
          "h2_9",
          "p_9",
          "textarea_9"
        ],
        builder: {
          type: "steps"
        }
      },
      page10: {
        label: "Step 11",
        elements: [
          "h2_10",
          "p_10",
          "textarea_10"
        ],
        builder: {
          type: "steps"
        }
      },
      page11: {
        label: "Step 12",
        elements: [
          "h2_11",
          "p_11",
          "list_11"
        ],
        builder: {
          type: "steps"
        }
      },
      page12: {
        label: "Step 13",
        elements: [
          "h2_12",
          "p_12",
          "list_12"
        ],
        builder: {
          type: "steps"
        }
      },
      page13: {
        label: "Step 14",
        elements: [
          "h2_13",
          "p_13",
          "list_13"
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