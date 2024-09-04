import React, { useState } from "react";
import "./ChatList.css";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input placeholder="Search" type="text" name="" id="" />
        </div>

        <img
          onClick={() => setAddMode(!addMode)}
          className="Add"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
        />
      </div>
      {/* ^searchBar  down chat */}

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jone Doe</span>
          <p>Hey, sup</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jone Doe</span>
          <p>Hey, sup</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jone Doe</span>
          <p>Hey, sup</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
