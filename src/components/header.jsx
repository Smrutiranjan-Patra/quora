import React, { useState } from "react";
import { icons } from "react-icons";
import { Link, NavLink } from "react-router-dom";

import "./css/header.css";

import mainlogo from "./Images/mainlogo.png";

// icons
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsPencilSquare, BsGlobe } from "react-icons/bs";
import { IoIosPeople, IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const showdetails = () => {};

export default function Header() {
  const { email, profile_pic } = useSelector((store) => store.user);
  console.log(email, profile_pic);
  const language = () => {};
  return (
    <>
      <div className="header">
        <div className="centered">
          <div className="logo-box">
            <img src={mainlogo} alt="" />
          </div>
          <div className="Navbar">
            <NavLink exact activeClassName="active-icon" to="/home">
              <AiOutlineHome className="icon" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/following">
              <BiNews className="icon" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/answer">
              <BsPencilSquare className="icon" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/space">
              <IoIosPeople className="icon" />
            </NavLink>
            <NavLink exact activeClassName="active-icon" to="/notification">
              <IoIosNotificationsOutline className="icon" />
            </NavLink>
          </div>
          <div id="searchbar">
            <AiOutlineSearch style={{ fontSize: "1.3em", width: "30px" }} />
            <input type="text" placeholder="Search Quora" id="search" />
          </div>
          <div className="user-logo">
            <Link to={`/profile/${email}`}>
              <img src={profile_pic} alt="" />
            </Link>
            <BsGlobe
              className="gicon"
              onClick={language}
              // onClick={showdetails}
            />
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
