import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/Profile_Picture.png";
import profile2 from './image/profilePic.jpg'
import profile3 from './image/profilePic2.jpg'
import profile4 from './image/Endo.png'
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";


const App = () => {
  return (
    <div className="ui comments">
      <UserCard header='Endo'><SingleComment name='Endo' date='Today at 4 PM' text='Appelsin' picture={profile4}/></UserCard>
      <UserCard header='Alpy'>
        <SingleComment name='Alpy' date='Today at 5 PM' text='Good job!' picture={profile1} /></UserCard>
      <UserCard header='Sarah'><SingleComment name='Sarah' date='Today at 6 PM' text='It is amazing' picture={profile2} /></UserCard>
      <UserCard header='Alex'><SingleComment name='Alex' date='Today at 7 PM' text='Thank you' picture={profile3} /></UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
