import { ADD_CHAT } from "../types";

const initialState = [
  { name: "chat1", id: "1" },
  { name: "chat2", id: "2" },
  { name: "chat3", id: "3" },
  { name: "chat4", id: "4" },
];

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload];

    default:
      return state;
  }
};
