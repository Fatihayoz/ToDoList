<<<<<<< HEAD
// const state = { items: [{ text: "", done: false }] };

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
  
  export const state = {
    items: [
    // {
    // text: 'test',
    // done: false,
    // },
    ],
    };
  export { state };
  
=======
// const state = { items: [{ text: "", done: false }] };

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
  items: [],
  done: false,
};
export { state };
>>>>>>> 824d5589cd503a5b9e09d9f496451ed55a66298b
