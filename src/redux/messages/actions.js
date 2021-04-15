import { AUTHORS } from "../../utils/constants";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./types";
import { activeChat, inactiveChat } from "../chats/actions";
import { v4 as uuidv4 } from "uuid";

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}

export function addMessageWithBot(message) {
  return (dispatch) => {
    const botMessage = {
      text: "something very witty",
      author: AUTHORS.BOT,
      // id: message.id + 1,
      id: uuidv4(),
      chatId: message.chatId,
    };
    if (message.author === AUTHORS.ME) {
      dispatch(addMessage(message));
      setTimeout(() => {
        dispatch(addMessage(botMessage));
        dispatch(activeChat(message));
      }, 1000);
      setTimeout(() => {
        dispatch(inactiveChat(message));
      }, 3000);
    }
  };
}
export function deleteMessage(messId, chatId) {
  return {
    type: DELETE_MESSAGE,
    payload: {
      messId,
      chatId,
    },
  };
}
