import { MessageField } from "./components/MessageField";
import { AUTHORS } from "./utils/constants";

const messagesArray = [
  { text: "Привет", author: AUTHORS.ME },
  { text: "Как дела?", author: AUTHORS.ME },
];

function App() {
  return (
    <div className="container">
      <MessageField messagesArray={messagesArray} />
    </div>
  );
}

export default App;
