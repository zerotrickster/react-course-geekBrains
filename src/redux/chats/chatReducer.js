import { ACTIVE_CHAT, ADD_CHAT, DELETE_CHAT, INACTIVE_CHAT } from "./types";

const initialState = {
  1: { name: "chat1", id: 1, active: false },
  2: { name: "chat2", id: 2, active: false },
  3: { name: "chat3", id: 3, active: false },
  4: { name: "chat4", id: 4, active: false },
};
export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return { ...state, [action.payload.id]: action.payload };
    case ACTIVE_CHAT:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          active: true,
        },
      };
    case INACTIVE_CHAT:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          active: false,
        },
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
