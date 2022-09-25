import React from "react";
import { Link } from "react-router-dom";
import birthday from "../images/birthday.png";
function Event() {
  return (
    <div>
      <h1>HEllo</h1>
      <button>
        <Link href="./main">back</Link>
      </button>
      <img src={birthday} alt="birthday" />
    </div>
  );
}
export default Event;
