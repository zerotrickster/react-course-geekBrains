import { Grid } from "@material-ui/core";
import { ChatList } from "./components/ChatList";
import { Header } from "./components/Header";
import { MessageField } from "./components/MessageField";
import { AUTHORS } from "./utils/constants";

const messagesArray = [
  { text: "Привет", author: AUTHORS.ME, id: 1 },
  { text: "Как дела?", author: AUTHORS.ME, id: 2 },
];

const chats = [
  { name: "chat1", id: 1 },
  { name: "chat2", id: 2 },
  { name: "chat3", id: 3 },
  { name: "chat4", id: 4 },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Grid container spacing={0}>
        <Grid container item xs={8}>
          <MessageField messagesArray={messagesArray} />
        </Grid>
        <Grid container item xs={4}>
          <ChatList chats={chats} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
