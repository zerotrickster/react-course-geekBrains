import { List, ListItem, ListItemText } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addChat, deleteChat } from "../redux/chats/actions";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import shortid from "shortid";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const history = useHistory();

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  const addChatHandler = (event) => {
    event.preventDefault();
    if (input) {
      const newChat = {
        name: input,
        id: shortid.generate(),
        active: false,
      };

      dispatch(addChat(newChat));
      history.push(`/chat/${newChat.id}/`);

      setInput("");
    }
  };

  const deleteChatHandler = (id) => {
    // history.push("/profile");
    dispatch(deleteChat(id));
  };

  return (
    <List>
      {Object.values(chats).map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.id}/`} className="chatLink">
          <ListItem button>
            <SendIcon />
            <ListItemText>{chat.name}</ListItemText>
            {chat.active && <FeedbackIcon />}
            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteChatHandler(chat.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </Link>
      ))}

      <form onSubmit={addChatHandler}>
        <input
          type="text"
          name="chatInput"
          onChange={changeInputHandler}
          value={input}
        />
        <button>add chat</button>
      </form>
    </List>
  );
};
