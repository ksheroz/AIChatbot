import React, { useEffect, useRef } from "react";

export default function Messages({ messages }) {
  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  const today = new Date();

  return (
    <div className="messageBox">
    
    <div className="messages">
      {messages}

      <div id={"el"} ref={el} />
    </div>

    </div>
  );
}
