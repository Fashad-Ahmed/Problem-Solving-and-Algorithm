import RealTimeChat from "./components/RealTimeChat";
import { ChatProvider } from "./contexts";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* <ChatProvider>
        <RealTimeChat user="User1" />
      </ChatProvider>
      <ChatProvider>
        <RealTimeChat user="User2" />
      </ChatProvider> */}

      <ChatProvider>
        <RealTimeChat />
      </ChatProvider>
    </div>
  );
};

export default App;
