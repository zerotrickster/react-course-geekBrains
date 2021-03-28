import { useState } from "react";
import { Message } from "./Message";

export const MessageField = ({ messagesArray }) => {
  const [messages, setMessages] = useState(messagesArray);

  const messageList = messages.map((message) => <Message text={message} />);

  const sendHandler = () => {
    setMessages([...messages, "Нормально"]);
  };

  return (
    <div>
      {messageList}
      <button onClick={sendHandler}>send</button>
    </div>
  );
};
