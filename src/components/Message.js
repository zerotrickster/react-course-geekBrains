import { AUTHORS } from "../utils/constants";

export const Message = ({ text, author }) => {
  return (
    <div
      className="message"
      style={{ alignSelf: author === AUTHORS.BOT ? "flex-start" : "flex-end" }}
    >
      <small>{author}:</small>
      {text}
    </div>
  );
};
