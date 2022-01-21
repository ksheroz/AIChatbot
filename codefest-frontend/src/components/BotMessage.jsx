import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      console.log(msg);
      setLoading(false);
      if (msg === '===colors'){
        setMessage('Sounds great. Let me know which color?');
      }else if(msg === '===size'){
        setMessage('Nice choice. Kindly select a size?');
      }
      else
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">{isLoading ? "..." : message}</div>
    </div>
  );
}
