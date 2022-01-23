import React, { useState } from "react";
import { icons } from "react-icons";
import { NavLink } from "react-router-dom";

import "./css/header.css";

import mainlogo from "./Images/mainlogo.png";

// icons
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsPencilSquare, BsGlobe } from "react-icons/bs";
import { IoIosPeople, IoIosNotificationsOutline } from "react-icons/io";



export default function Header() {

  return (
    <>
      <div className="header">
        <div className="centered">
          <div className="logo-box">
            <img src={mainlogo} alt="" />
          </div>
          <div className="Navbar">
            <NavLink exact activeClassName="active-icon" to="/home">
              <AiOutlineHome className="icon" title="Home" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/following">
              <BiNews className="icon" title="following" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/answer">
              <BsPencilSquare className="icon" title="Answer" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/space">
              <IoIosPeople className="icon" title="Space" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/notification">
              <IoIosNotificationsOutline className="icon" title="Notification" />
            </NavLink>
          </div>
          <div id="searchbar">
            <AiOutlineSearch style={{ fontSize: "1.3em", width: "30px" }} />
            <input type="text" placeholder="Search Quora" id="search" />
          </div>
          <div className="user-logo">
            <img
              src="https://i.picsum.photos/id/453/200/300.jpg?grayscale&hmac=6XMjNqrOjgh3bLi1LeXlqbO-SZUXcwEgaq-aUQJGhDI"
              alt="user" id="uicon"
            />
            <BsGlobe id="gicon" className="gicon" />
          </div>
          <div className="button-box">
            <button> Add Question</button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
