import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { ChatList } from "./components/ChatList";
import { Header } from "./components/Header";
import { MessageField } from "./components/MessageField";
import { AUTHORS } from "./utils/constants";

const initialMessages = {
  1: [{ text: "Привет", author: AUTHORS.ME, id: 1 }],
  2: [{ text: "Как дела?", author: AUTHORS.ME, id: 1 }],
  3: [],
  4: [{ text: "test4", author: AUTHORS.BOT, id: 1 }],
};

const initialChats = [
  { name: "chat1", id: "1" },
  { name: "chat2", id: "2" },
  { name: "chat3", id: "3" },
  { name: "chat4", id: "4" },
];

function App() {
  const { chatId } = useParams();

  return (
    <div className="container">
      <Header chatId={chatId} />
      <Grid container spacing={0}>
        <Grid container item xs={3}>
          <ChatList initialChats={initialChats} />
        </Grid>
        {chatId && (
          <Grid container item xs={9}>
            <MessageField initialMessages={initialMessages} chatId={chatId} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
