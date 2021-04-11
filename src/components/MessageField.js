import { Fab, TextField } from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SendIcon from "@material-ui/icons/Send";
import { AUTHORS } from "../utils/constants";
import { Message } from "./Message";
import { addMessageWithBot } from "../redux/messages/actions";

export const MessageField = ({ chatId }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [input, setInput] = useState("");

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  const sendHandler = (event) => {
    event.preventDefault();
    if (input) {
      const newMessage = {
        text: input,
        author: AUTHORS.ME,
        id: messages[chatId]?.length ? messages[chatId].length + 1 : 1,
        chatId,
      };

      dispatch(addMessageWithBot(newMessage));

      setInput("");
    }
  };

  return (
    <>
      <div className="message-field">
        {messages[chatId]?.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            author={message.author}
            messId={message.id}
            chatId={chatId}
          />
        ))}
      </div>
      <form onSubmit={sendHandler} style={{ width: "100%", display: "flex" }}>
        <TextField
          name="input"
          fullWidth={true}
          style={{ fontSize: "22px" }}
          onChange={changeInputHandler}
          autoFocus={true}
          value={input}
        ></TextField>
        <Fab>
          <SendIcon />
        </Fab>
      </form>
    </>
  );
};
