import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";
import { messagesReducer } from "./messagesReducer";
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({
  messages: messagesReducer,
  chats: chatReducer,
  profile: profileReducer,
});
