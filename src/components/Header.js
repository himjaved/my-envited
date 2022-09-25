import React from "react";
import "./Header.css";
import { BsBatteryFull, BsWifi } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
function Header() {
  return (
    <div className="Header">
      <span className="time">9:41</span>
      <span className="signal">
        <FaSignal />
      </span>
      <span>
        <BsWifi />
      </span>
      <span>
        <BsBatteryFull />
      </span>
    </div>
  );
}
export default Header;
