import { Fab, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { AUTHORS } from "../utils/constants";
import { Message } from "./Message";
import SendIcon from "@material-ui/icons/Send";

export const MessageField = ({ initialMessages, chatId }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  useEffect(() => {
    let timer;
    const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];

    if (lastMessage?.author === AUTHORS.ME) {
      timer = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              text: "something very witty",
              author: AUTHORS.BOT,
              id: messages[chatId]?.[messages[chatId]?.length + 1],
            },
          ],
        });
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [messages, chatId]);

  const messageList = messages[chatId].map((message) => (
    <Message key={message.id} text={message.text} author={message.author} />
  ));

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  const sendHandler = (event) => {
    event.preventDefault();
    if (input) {
      setMessages({
        ...messages,
        [chatId]: [
          ...messages[chatId],
          { text: input, author: AUTHORS.ME, id: messages[chatId].length + 1 },
        ],
      });
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
