import { List, ListItem, ListItemText } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addChat } from "../redux/actions";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  const addChatHandler = (event) => {
    event.preventDefault();
    if (input) {
      const newChat = {
        name: input,
        id: chats.length + 1,
      };

      dispatch(addChat(newChat));

      setInput("");
    }
  };

  return (
    <List>
      {chats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.id}/`} className="chatLink">
          <ListItem button>
            <SendIcon />
            <ListItemText>{chat.name}</ListItemText>
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
