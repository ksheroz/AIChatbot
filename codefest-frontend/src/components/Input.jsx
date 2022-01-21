import React, { useState } from "react";

export default function Input({ onSend,mCount, messages }) {
  const [text, setText] = useState("");
  const colormap = {"Red": "#f50057", "Blue" : "#090979", "Black":"#020024", "Green":"#a8e063"}
  const [start, updateArray] = useState(["I need a shirt", "Create Account", "Place an Order", "Cancel an Order"])
  const [colorArray, updateColorArray] = useState(["Red", "Blue", "Green", "Black"])
  const [sizeArray, updateSizeArray] = useState(["X-Small", "Small","Medium", "Large", "X-Large"])

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleSuggestion = text=> {
      onSend(text);
  };

  const handleSend = e => {
    e.preventDefault();
    onSend(text);
    setText("");
  };



  return (
    <>
    <div className="suggestionBox"> 
    { mCount < 1 && start.map(i=><button key={i} className="Suggestions" onClick={()=>{onSend(i)}}>{i}</button>)}
     { messages=='===colors' && colorArray.map(i=><button key={i} className="Suggestions" style={{backgroundColor:colormap[i]}} onClick={()=>{onSend(i)}}>{i}</button>)}
     { messages=='===size' && sizeArray.map(i=><button key={i} className="Suggestions" onClick={()=>{onSend(i)}}>{i}</button>)}
      </div>
    <div className="input"></div>
    <div className="input">
      

      <form onSubmit={handleSend}>
        <input
          type="text"
          onChange={handleInputChange}
          value={text}
          placeholder="Enter your message here"
          required="true"
        />
        <button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 500 500"
          >
            <g>
              <g>
                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
    </>
  );
}
