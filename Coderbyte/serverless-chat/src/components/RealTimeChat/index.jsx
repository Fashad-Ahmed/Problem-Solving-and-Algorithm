import { useState } from "react";
import { useChat } from "../../contexts";

// const RealTimeChat = ({ user }) => {
//   const { messages, addMessage } = useChat();
//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     addMessage(user, newMessage);
//     setNewMessage("");
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         marginBottom: "20px",
//       }}
//     >
//       <div
//         style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "10px" }}
//       >
//         {messages.map((message, index) => (
//           <div key={index} style={{ marginBottom: "5px" }}>
//             <strong>{message.user}:</strong> {message.text}
//           </div>
//         ))}
//       </div>
//       <div style={{ display: "flex" }}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           style={{ flex: "1", marginRight: "10px", padding: "5px" }}
//         />
//         <button onClick={handleSendMessage} style={{ padding: "5px" }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };


const RealTimeChat = () => {
  const { user, messages, addMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    addMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginTop: "50px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "20px" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              background: message.user === user ? "#f0f0f0" : "#e6f7ff",
            }}
          >
            <strong>{message.user === user ? "You" : message.user}:</strong>{" "}
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            flex: "1",
            marginRight: "10px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "8px",
            borderRadius: "5px",
            background: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default RealTimeChat;