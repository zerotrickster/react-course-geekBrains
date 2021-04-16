import { AUTHORS } from "../utils/constants";
import { IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { deleteMessage } from "../redux/messages/actions";
import { useDispatch } from "react-redux";

export const Message = ({ text, author, messId, chatId }) => {
  const dispatch = useDispatch();
  return (
    <div className={author === AUTHORS.BOT ? "message bot" : "message"}>
      <small>{author}:</small>
      {text}

      <IconButton
        aria-label="delete"
        onClick={() => {
          dispatch(deleteMessage(messId, chatId));
        }}
      >
        <HighlightOffIcon />
      </IconButton>
    </div>
  );
};
