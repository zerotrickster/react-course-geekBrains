import { combineReducers } from "redux";
import { chatReducer } from "./chats/chatReducer";
import { messagesReducer } from "./messages/messagesReducer";
import { profileReducer } from "./profile/profileReducer";

export const rootReducer = combineReducers({
  messages: messagesReducer,
  chats: chatReducer,
  profile: profileReducer,
});
