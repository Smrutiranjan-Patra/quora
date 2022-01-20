import React from "react";
import "./css/header.css";
import mainlogo from "./Images/mainlogo.png";

//icons
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import FeedIcon from "@mui/icons-material/Feed";
import LanguageIcon from "@mui/icons-material/Language";



export default function Header() {
  const iconStyle = {
    height: "1.5em",
    fontSize: "1.8em",
    color: "Black"
  };

  const colorButton = (e) => {
    console.log("working");
  };
  return (
    <>
      <div className="header">
        <div className="centered">
          <div className="logo-box">
            <img src={mainlogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
