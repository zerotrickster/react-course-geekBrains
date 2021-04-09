import { ADD_CHAT, ADD_MESSAGE } from "./types";

export function addChat(chat) {
  return {
    type: ADD_CHAT,
    payload: chat,
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}
