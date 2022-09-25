import React from "react";
import { GrFormPrevious, GrFormNext, GrUpload } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { IoReloadOutline } from "react-icons/io5";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="domain">
        <span className="font">aA </span>
        <span>domain.com </span> <IoReloadOutline className="reload" />
      </div>
      <div className="navigation">
        <span>
          <GrFormPrevious />
        </span>{" "}
        <span>
          <GrFormNext />
        </span>
        <span>
          {" "}
          <GrUpload />
        </span>
        <span>
          <HiOutlineBookOpen />{" "}
        </span>
        <span>
          <RiCheckboxMultipleBlankLine />
        </span>
      </div>
    </div>
  );
}
export default Footer;
