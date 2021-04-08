import { ADD_MESSAGE } from "../types";
import { AUTHORS } from "../../utils/constants";

const initialState = {
  1: [{ text: "Привет", author: AUTHORS.ME, id: 1 }],
  2: [{ text: "Как дела?", author: AUTHORS.ME, id: 1 }],
  3: [],
  4: [{ text: "test4", author: AUTHORS.BOT, id: 1 }],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload,
        ],
      };
    default:
      return state;
  }
};
