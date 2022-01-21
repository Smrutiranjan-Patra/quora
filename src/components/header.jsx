import React from "react";
import "./css/header.css";
import mainlogo from "./Images/mainlogo.png";
import { NavLink } from "react-router-dom";

//icons
// import HomeIcon from "@mui/icons-material/Home";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import PersonIcon from "@mui/icons-material/Person";
// import CreateIcon from "@mui/icons-material/Create";
// import FeedIcon from "@mui/icons-material/Feed";
// import LanguageIcon from "@mui/icons-material/Language";



export default function Header() {
  return (
    <>
      <div className="header">
        <div className="centered">
          <div className="logo-box">
            <img src={mainlogo} alt="" />
          </div>
          <div className="Navbar">
            <NavLink exact activeClassName="active-icon" to="/Home"></NavLink>
            <NavLink exact activeClassName="active-icon" to="/following"></NavLink>
            <NavLink exact activeClassName="active-icon" to="/answer"></NavLink>
            <NavLink exact activeClassName="active-icon" to="/space"></NavLink>
            <NavLink exact activeClassName="active-icon" to="/notification"></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
