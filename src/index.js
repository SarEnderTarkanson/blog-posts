import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/Profile_Picture.png";
import SingleComment from "./SingleComment";


const App = () => {
  return (
    <div className="ui comments">
      <SingleComment />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
