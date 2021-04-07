import { List, ListItem, ListItemText } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";

export const ChatList = ({ initialChats }) => {
  return (
    <List>
      {initialChats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.id}/`} className="chatLink">
          <ListItem button>
            <SendIcon />
            <ListItemText>{chat.name}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
