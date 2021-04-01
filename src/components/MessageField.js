import { Fab, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { AUTHORS } from "../utils/constants";
import { Message } from "./Message";
import SendIcon from "@material-ui/icons/Send";

export const MessageField = ({ messagesArray }) => {
  const [messages, setMessages] = useState(messagesArray);
  const [input, setInput] = useState("");

  useEffect(() => {
    let timer;

    if (messages[messages.length - 1].author === AUTHORS.ME) {
      timer = setTimeout(() => {
        setMessages([
          ...messages,
          {
            text: "something very witty",
            author: AUTHORS.BOT,
            id: messages.length + 1,
          },
        ]);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [messages]);

  const messageList = messages.map((message) => (
    <Message key={message.id} text={message.text} author={message.author} />
  ));

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  const sendHandler = (event) => {
    event.preventDefault();
    if (input) {
      setMessages([
        ...messages,
        { text: input, author: AUTHORS.ME, id: messages.length + 1 },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <div className="message-field">{messageList}</div>
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
