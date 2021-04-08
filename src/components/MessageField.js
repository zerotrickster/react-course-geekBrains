import { Fab, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AUTHORS } from "../utils/constants";
import { Message } from "./Message";
import { addMessage } from "../redux/actions";
import SendIcon from "@material-ui/icons/Send";

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
        id: messages[chatId].length + 1,
        chatId,
      };

      dispatch(addMessage(newMessage));

      setInput("");
    }
  };

  useEffect(() => {
    let timer;
    const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];

    if (lastMessage?.author === AUTHORS.ME) {
      timer = setTimeout(() => {
        const botMessage = {
          text: "something very witty",
          author: AUTHORS.BOT,
          id: messages[chatId].length + 1,
          chatId,
        };
        dispatch(addMessage(botMessage));
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [messages, chatId, dispatch]);

  return (
    <>
      <div className="message-field">
        {messages[chatId]?.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            author={message.author}
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
