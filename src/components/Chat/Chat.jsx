import React, { useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open, setopen] = useState(false);
  const [text, settext] = useState("");
  const handleEmoji = (e) => {
    console.log(e.emoji);
    settext((prev)=>prev+e.emoji);
    setopen(false);
  };
  console.log(text)
  return (
    <div className="Chat">
      
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jone Doe</span>
            <p>Lorem ipsum dolor consec</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo esse eaque nostrum illum suscipit libero adipisci in deleniti tempora quibusdam sunt dolor, corporis nemo exercitationem consectetur unde repellendus? Rerum, ipsum!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo esse eaque nostrum illum suscipit libero adipisci in deleniti tempora quibusdam sunt dolor, corporis nemo exercitationem consectetur unde repellendus? Rerum, ipsum!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo esse eaque nostrum illum suscipit libero adipisci in deleniti tempora quibusdam sunt dolor, corporis nemo exercitationem consectetur unde repellendus? Rerum, ipsum!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
         
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo esse eaque nostrum illum suscipit libero adipisci in deleniti tempora quibusdam sunt dolor, corporis nemo exercitationem consectetur unde repellendus? Rerum, ipsum!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message" value={text} className="input" onChange={(e)=>{settext(e.target.value)}}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setopen(!open)} />
          <div className="picker">
          {open ? <EmojiPicker onEmojiClick={handleEmoji}></EmojiPicker> : null}
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
