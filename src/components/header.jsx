import React from "react";
import { NavLink } from "react-router-dom";

import "./css/header.css";

import mainlogo from "./Images/mainlogo.png";



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
