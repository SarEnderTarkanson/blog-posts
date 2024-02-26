import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/Profile_Picture.png";
import profile2 from './image/profilePic.jpg'
import profile3 from './image/profilePic2.jpg'
import SingleComment from "./SingleComment";


const App = () => {
  return (
    <div className="ui comments">
      <SingleComment name='Alpy' date='Today at 5 PM' text='Good job!' picture={profile1}/>
      <SingleComment name='Sarah' date='Today at 6 PM' text='It is amazing' picture={profile2}/>
      <SingleComment name='Alex' date='Today at 7 PM' text='Thank you' picture={profile3}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
