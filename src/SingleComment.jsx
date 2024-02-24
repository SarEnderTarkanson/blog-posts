import React from "react";
import profile1 from "./image/profilePic.jpg";

const SingleComment = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={profile1} alt="profile picture"></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          Sarah
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00 PM</span>
        </div>
        <div className="text">It's amazing!!!</div>
      </div>
    </div>
  );
};

export default SingleComment;
