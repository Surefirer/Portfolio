import React from "react";
import { Icons } from "../assets";
import { Link } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show === true) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="side-drawer__menu" onClick={props.click}>
        <Link to={"/"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.home}
              alt="questionCircle"
            />
            Home
          </li>
        </Link>
        <Link to={"/projects"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.projectDiagram}
              alt="Projects"
            />
            Projects
          </li>
        </Link>
        <Link to={"/about"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.mehBlank}
              alt="About-Me"
            />
            About Me
          </li>
        </Link>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://mega.nz/file/FWpCFARK#C_2Fp921KaM11pRZ9OCoX6506TztZeTYenD6_L0OJyg"
        >
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.userTie}
              alt="Resume"
            />
            Resume
          </li>
        </a>
        <Link to={"/contact"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.commentAltSmile}
              alt="questionCircle"
            />
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
