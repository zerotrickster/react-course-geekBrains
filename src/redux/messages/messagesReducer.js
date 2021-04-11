import { AUTHORS } from "../../utils/constants";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./types";
import { DELETE_CHAT } from "../chats/types";

const initialState = {
  1: [{ text: "Привет", author: AUTHORS.ME, id: 1 }],
  2: [
    { text: "Как дела?", author: AUTHORS.ME, id: 1 },
    { text: "Как дела?", author: AUTHORS.ME, id: 2 },
  ],
  3: [],
  4: [{ text: "test4", author: AUTHORS.BOT, id: 1 }],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (!Object.keys(state).includes(action.payload.chatId)) {
        const id = action.payload.chatId;
        return {
          ...state,
          [id]: [action.payload],
        };
      }
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload,
        ],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        [+action.payload.chatId]: state[action.payload.chatId].filter(
          (item) => item.id !== action.payload.messId
        ),
      };

    case DELETE_CHAT:
      return (state = Object.fromEntries(
        Object.entries(state).filter(
          (item) => item[0] !== action.payload.toString()
        )
      ));
    default:
      return state;
  }
};
