import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ChatList } from "./components/ChatList";
import { Header } from "./components/Header";
import { MessageField } from "./components/MessageField";

function App() {
  const { chatId } = useParams();
  const chats = useSelector((state) => state.chats);
  let isExist;
  if (chatId) {
    isExist = Object.keys(chats).includes(chatId.toString());
  }

  return (
    <div className="container">
      <Header chatId={chatId} />
      <Grid container spacing={0}>
        <Grid container item xs={3}>
          <ChatList />
        </Grid>
        {chatId && isExist && (
          <Grid container item xs={9}>
            <MessageField chatId={chatId} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
