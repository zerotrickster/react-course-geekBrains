import { ACTIVE_CHAT, ADD_CHAT, INACTIVE_CHAT, DELETE_CHAT } from "./types";

export function addChat(chat) {
  return {
    type: ADD_CHAT,
    payload: chat,
  };
}

export function activeChat(message) {
  return {
    type: ACTIVE_CHAT,
    payload: message.chatId,
  };
}
export function inactiveChat(message) {
  return {
    type: INACTIVE_CHAT,
    payload: message.chatId,
  };
}

export function deleteChat(id) {
  return {
    type: DELETE_CHAT,
    payload: id,
  };
}
