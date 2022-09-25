import React from "react";

import landing from "../images/Landing page image.svg";

import "./Main.css";
function Main() {
  return (
    <div className="main">
      <h1 className="title">
        Imagine if
        <div className="snapchat">SnapChat</div> had events
      </h1>
      <p className="description">
        Easily host and share events with your friends across any social media.
      </p>
      <img className="landing-img" src={landing} alt="Landing-img" />
      <br />

      <button className="btn">🎉 Create my event</button>
    </div>
  );
}
export default Main;
