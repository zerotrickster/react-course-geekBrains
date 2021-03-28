import { useEffect, useRef, useState } from "react";
import { AUTHORS } from "../utils/constants";
import { Message } from "./Message";

export const MessageField = ({ messagesArray }) => {
  const [messages, setMessages] = useState(messagesArray);
  const [input, setInput] = useState("");

  const ref = useRef();

  useEffect(() => ref.current.focus());

  useEffect(() => {
    if (messages[messages.length - 1].author === AUTHORS.ME) {
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: "something very witty", author: AUTHORS.BOT },
        ]);
      }, 1000);
    }
  }, [messages]);

  const messageList = messages.map((message, index) => (
    <Message key={index} text={message.text} author={message.author} />
  ));

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  const sendHandler = () => {
    if (input) {
      setMessages([...messages, { text: input, author: AUTHORS.ME }]);
      setInput("");
    }
  };

  return (
    <div>
      {messageList}
      <input ref={ref} value={input} onChange={changeInputHandler} />
      <button onClick={sendHandler}>send</button>
    </div>
  );
};
