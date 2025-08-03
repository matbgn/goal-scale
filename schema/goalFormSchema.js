export default {
  schema: {
    headerGoal: {
          name: "headerGoal",
          type: "static",
          tag: "h2",
          content: "GOAL",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphGoal: {
          name: "paragraphGoal",
          type: "static",
          tag: "p",
          content: "<div>Who I choose to be / what I choose to be<br>The prime intention as a basic purpose for this life on earth.</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        inputGoal: {
          name: "inputGoal",
          type: "textarea",
          builder: {
            type: "textarea",
            label: "Textarea"
          },
          rules: [
            "required"
          ],
          label: "Define your primary objective or aspiration"
        },
        headerPurposes: {
          name: "headerPurposes",
          type: "static",
          tag: "h2",
          content: "PURPOSES",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphPurposes: {
          name: "paragraphPurposes",
          type: "static",
          tag: "p",
          content: "<div>What is the main motivation for carrying out the goal</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listPurposes: {
          name: "listPurposes",
          type: "list",
          element: {
            type: "object",
            name: "container",
            builder: {
              type: "container"
            },
            schema: {
              purpose: {
                name: "purpose",
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
        headerPolicies: {
          name: "headerPolicies",
          type: "static",
          tag: "h2",
          content: "POLICIES / PRINCIPLES",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphPolicies: {
          name: "paragraphPolicies",
          type: "static",
          tag: "p",
          content: "<div>How I choose to become it</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listPolicies: {
          name: "listPolicies",
          type: "list",
          element: {
            type: "object",
            name: "policy_container",
            builder: {
              type: "container"
            },
            schema: {
              policy: {
                name: "policy",
                type: "text",
                label: "Define a policy or principle",
                builder: {
                  type: "text",
                  label: "Text"
                }
              }
            }
          },
          builder: {
            type: "nestedList",
            label: "Nested list"
          },
          label: "Define your policies or principles"
        },
        headerIdealScene: {
          name: "headerIdealScene",
          type: "static",
          tag: "h2",
          content: "IDEAL SCENE",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphIdealScene: {
          name: "paragraphIdealScene",
          type: "static",
          tag: "p",
          content: "<div>What I choose to have when I achieve this goal</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        inputIdealScene: {
          name: "inputIdealScene",
          type: "textarea",
          label: "Describe your ideal scene",
          builder: {
            type: "textarea",
            label: "Textarea"
          }
        },
        headerCurrentScene: {
          name: "headerCurrentScene",
          type: "static",
          tag: "h2",
          content: "CURRENT SCENE",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphCurrentScene: {
          name: "paragraphCurrentScene",
          type: "static",
          tag: "p",
          content: "<div>What I have now</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        inputCurrentScene: {
          name: "inputCurrentScene",
          type: "textarea",
          label: "Describe your current scene",
          builder: {
            type: "textarea",
            label: "Textarea"
          }
        },
        headerDeviations: {
          name: "headerDeviations",
          type: "static",
          tag: "h2",
          content: "DEVIATIONS",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphDeviations: {
          name: "paragraphDeviations",
          type: "static",
          tag: "p",
          content: "<div>List of differences between the current image and the ideal image</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listDeviations: {
          name: "listDeviations",
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
        headerSituation: {
          name: "headerSituation",
          type: "static",
          tag: "h2",
          content: "SITUATION",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphSituation: {
          name: "paragraphSituation",
          type: "static",
          tag: "p",
          content: "<div>The main deviation from the ideal image</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        inputSituation: {
          name: "inputSituation",
          type: "textarea",
          label: "Describe the situation",
          builder: {
            type: "textarea",
            label: "Textarea"
          }
        },
        headerVfps: {
          name: "headerVfps",
          type: "static",
          tag: "h2",
          content: "VALUABLE FINAL PRODUCT(S)",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphVfps: {
          name: "paragraphVfps",
          type: "static",
          tag: "p",
          content: "<div>The result needed to correct the situation — something that can be exchanged outside the area for something in return</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listVfps: {
              name: "listVfps",
              type: "list",
              element: {
                type: "text"
              },
              label: "Define your valuable final product(s)",
              builder: {
                type: "list",
                label: "List"
              }
            },
        headerStatistics: {
          name: "headerStatistics",
          type: "static",
          tag: "h2",
          content: "STATISTICS",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphStatistics: {
          name: "paragraphStatistics",
          type: "static",
          tag: "p",
          content: "<div>The figures to be achieved to correct the situation</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listStatistics: {
              name: "listStatistics",
              type: "list",
              element: {
                type: "text"
              },
              label: "Define the statistics",
              builder: {
                type: "list",
                label: "List"
              }
            },
        headerWhy: {
          name: "headerWhy",
          type: "static",
          tag: "h2",
          content: "WHY",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphWhy: {
          name: "paragraphWhy",
          type: "static",
          tag: "p",
          content: "<div>The main cause(s) of the situation</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listWhy: {
              name: "listWhy",
              type: "list",
              element: {
                type: "text"
              },
              label: "Explain the cause(s)",
              builder: {
                type: "list",
                label: "List"
              }
            },
        headerPlan: {
          name: "headerPlan",
          type: "static",
          tag: "h2",
          content: "PLAN",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphPlan: {
          name: "paragraphPlan",
          type: "static",
          tag: "p",
          content: "<div>Brilliant idea to correct the situation<br><br>Principles:<br>1. Afterwards, we will refine this plan by desining a PROGRAM which will be our big solution.<br>2. The little problems inside that big solution are then solved by PROJECTS.<br>3. Inside the projects the littler-littler problems are solved by COMMANDS.</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        inputPlan: {
          name: "inputPlan",
          type: "textarea",
          label: "Outline your plan",
          builder: {
            type: "textarea",
            label: "Textarea"
          }
        },
        headerProgram: {
          name: "headerProgram",
          type: "static",
          tag: "h2",
          content: "PROGRAM",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphProgram: {
          name: "paragraphProgram",
          type: "static",
          tag: "p",
          content: "<div>The big solution to a problem given by a defined plan.</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listProgram: {
          name: "listProgram",
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
        headerProjects: {
          name: "headerProjects",
          type: "static",
          tag: "h2",
          content: "PROJECTS",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphProjects: {
          name: "paragraphProjects",
          type: "static",
          tag: "p",
          content: "<div>These are a series of guiding steps which if followed will result in a full and successful accomplishment of the program target</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listProjects: {
          name: "listProjects",
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
        headerCommands: {
          name: "headerCommands",
          type: "static",
          tag: "h2",
          content: "COMMANDS",
          builder: {
            type: "h2",
            label: "H2 header"
          }
        },
        paragraphCommands: {
          name: "paragraphCommands",
          type: "static",
          tag: "p",
          content: "<div>What are issued to get the actions called done so that a valuable final product results</div>",
          builder: {
            type: "p",
            label: "Paragraph"
          }
        },
        listCommands: {
          name: "listCommands",
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
                  "headerGoal",
                  "paragraphGoal",
                  "inputGoal"
                ],
        builder: {
          type: "steps"
        }
      },
      page1: {
        label: "Step 2",
        elements: [
                  "headerPurposes",
                  "paragraphPurposes",
                  "listPurposes"
                ],
        builder: {
          type: "steps"
        }
      },
      page2: {
        label: "Step 3",
        elements: [
                  "headerPolicies",
                  "paragraphPolicies",
                  "listPolicies"
                ],
        builder: {
          type: "steps"
        }
      },
      page3: {
        label: "Step 4",
        elements: [
                  "headerIdealScene",
                  "paragraphIdealScene",
                  "inputIdealScene"
                ],
        builder: {
          type: "steps"
        }
      },
      page4: {
        label: "Step 5",
        elements: [
                  "headerCurrentScene",
                  "paragraphCurrentScene",
                  "inputCurrentScene"
                ],
        builder: {
          type: "steps"
        }
      },
      page5: {
        label: "Step 6",
        elements: [
                  "headerDeviations",
                  "paragraphDeviations",
                  "listDeviations"
                ],
        builder: {
          type: "steps"
        }
      },
      page6: {
        label: "Step 7",
        elements: [
                  "headerSituation",
                  "paragraphSituation",
                  "inputSituation"
                ],
        builder: {
          type: "steps"
        }
      },
      page7: {
        label: "Step 8",
        elements: [
                  "headerVfps",
                  "paragraphVfps",
                  "listVfps"
                ],
        builder: {
          type: "steps"
        }
      },
      page8: {
        label: "Step 9",
        elements: [
                  "headerStatistics",
                  "paragraphStatistics",
                  "listStatistics"
                ],
        builder: {
          type: "steps"
        }
      },
      page9: {
        label: "Step 10",
        elements: [
                  "headerWhy",
                  "paragraphWhy",
                  "listWhy"
                ],
        builder: {
          type: "steps"
        }
      },
      page10: {
        label: "Step 11",
        elements: [
                  "headerPlan",
                  "paragraphPlan",
                  "inputPlan"
                ],
        builder: {
          type: "steps"
        }
      },
      page11: {
        label: "Step 12",
        elements: [
                  "headerProgram",
                  "paragraphProgram",
                  "listProgram"
                ],
        builder: {
          type: "steps"
        }
      },
      page12: {
        label: "Step 13",
        elements: [
                  "headerProjects",
                  "paragraphProjects",
                  "listProjects"
                ],
        builder: {
          type: "steps"
        }
      },
      page13: {
        label: "Step 14",
        elements: [
                  "headerCommands",
                  "paragraphCommands",
                  "listCommands"
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