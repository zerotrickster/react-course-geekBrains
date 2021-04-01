import { List, ListItem, ListItemText } from "@material-ui/core";

export const ChatList = ({ chats }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem button key={chat.id}>
          <ListItemText>{chat.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
