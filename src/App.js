import { MessageField } from "./components/MessageField";

const messagesArray = ["Привет", "Как дела?"];

function App() {
  return (
    <div className="container">
      <MessageField messagesArray={messagesArray} />
    </div>
  );
}

export default App;
