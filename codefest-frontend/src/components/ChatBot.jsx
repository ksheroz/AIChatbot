import React, { useState, useEffect } from "react";

import Header from "./Header";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";

import API from "../ChatbotAPI";

function Chatbot() {
    const [messageCount, updateCount] = useState(0);
    const [messages, setMessages] = useState([]);
    const [latest,setLatest] = useState('');
    useEffect(() => {
      async function loadWelcomeMessage() {
        setMessages([
          <BotMessage
            key="0"
            fetchMessage={
              async () => 
              { const mess = await API.GetChatbotResponse("hi")
              setLatest(mess)
              return mess;
            }
          }
          />
        ]);
      }
      loadWelcomeMessage();
    }, []);
  
    const send = async text => {
      updateCount(messageCount+1)
      const newMessages = messages.concat(
        <UserMessage key={messages.length + 1} text={text} />,
        <BotMessage
          key={messages.length + 2}
          fetchMessage={async () => {const mess = await API.GetChatbotResponse(text)
          setLatest(mess)
          return mess;}}
        />
      );
      setMessages(newMessages);
    };
//    console.log(`print ${latest}`);
    return (
      <div className="chatbot">
        <Header />
        <Messages messages={messages} />
        <Input onSend={send} mCount={messageCount} messages={latest} />
      </div>
    );
  }

  
  export default Chatbot;