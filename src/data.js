const schema = {
    title: "list item",
    type: "object",
    properties: {
      item: {
        type: "string",
        description: "something user plans to do",
      },
      done: {
        type: "boolean",
        description: "shows if action is done or not",
      },
    },
    required: ["item"],
  };
  
  const state = {
    items: [
    // {
    // text: 'test',
    // done: false,
    // },
    ],
    };
  export { state };
