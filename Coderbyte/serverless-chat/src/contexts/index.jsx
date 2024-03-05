// import React, { createContext, useContext, useEffect, useState } from "react";

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);

//   const addMessage = (user, text) => {
//     setMessages((prevMessages) => [...prevMessages, { user, text }]);
//   };

//   useEffect(() => {
//     // Listen for storage events in other tabs
//     const handleStorageChange = (event) => {
//       if (event.key === "chatMessages") {
//         setMessages(JSON.parse(event.newValue));
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   useEffect(() => {
//     // Update storage when messages change
//     sessionStorage.setItem("chatMessages", JSON.stringify(messages));
//   }, [messages]);

//   return (
//     <ChatContext.Provider value={{ messages, addMessage }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => {
//   return useContext(ChatContext);
// };

import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(getUserId());
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, { user, text }]);
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "chatMessages") {
        setMessages(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  function getUserId() {
    let userId = localStorage.getItem("chatUserId");
    if (!userId) {
      userId = Math.random().toString(36).substring(7);
      localStorage.setItem("chatUserId", userId);
    }
    return userId;
  }

  return (
    <ChatContext.Provider value={{ user, messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
