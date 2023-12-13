import React from "react";
import "./style.css";

export const Index = ({ username }) => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="welcome-text">Welcome {username}! </div>
        <button className="button button-logout">Logout</button>
        <button className="button button-create-post">Create Post</button>
        <button className="button button-feed">Feed</button>
      </div>
    </div>
   );
};
