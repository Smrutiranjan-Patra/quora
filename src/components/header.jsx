import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./css/header.css";

import mainlogo from "./Images/mainlogo.png";

// icons
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsPencilSquare, BsGlobe, BsFillBookmarksFill } from "react-icons/bs";
import { IoIosPeople, IoIosNotificationsOutline } from "react-icons/io";
import { BiNews, BiMessageRoundedDots, BiDollar } from "react-icons/bi";
import { FiSpeaker } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { RiDraftFill } from "react-icons/ri";

export default function Header() {
  const { email, profile_pic } = useSelector((store) => store.user);

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
              <IoIosNotificationsOutline
                className="icon"
                title="Notification"
              />
            </NavLink>
          </div>
          <div id="searchbar">
            <AiOutlineSearch style={{ fontSize: "1.3em", width: "30px" }} />
            <input type="text" placeholder="Search Quora" id="search" />
          </div>
          <div className="user-logo">
            <img
              src="https://i.picsum.photos/id/453/200/300.jpg?grayscale&hmac=6XMjNqrOjgh3bLi1LeXlqbO-SZUXcwEgaq-aUQJGhDI"
              alt="user"
            />
            <BsGlobe id="gicon" className="gicon" />
          </div>
          <div className="button-box">
            <button> Add Question</button>
          </div>
        </div>
        <ul className="dropdown">
          <li className="icon">Language</li>
          <li className="icon">
            <span id="lang">EN</span>
            <span id="language">English</span>
            <input type="checkbox" checked="checked" />
          </li>
          <li className="icon">Add language</li>
          <li className="icon">Select language</li>
        </ul>

        {/* second */}

        <ul className="dropdown1">
          <li className="dropdown_li">
            <div id="firstname">
              <img
                src="https://i.picsum.photos/id/453/200/300.jpg?grayscale&hmac=6XMjNqrOjgh3bLi1LeXlqbO-SZUXcwEgaq-aUQJGhDI"
                alt=""
              />
              <h3>Smrutiranjan Patra</h3>
            </div>
          </li>
          <li className="dropdown_li">
            <ul id="list1">
              <li>
                <BiMessageRoundedDots className="lefticon" />
                <p>Message</p>
              </li>
              <li>
                <FiSpeaker className="lefticon" />
                <p>Create Ad</p>
              </li>
              <li>
                <BiDollar className="lefticon" />
                <p>Monetiztion</p>
              </li>
              <li>
                <GoGraph className="lefticon" />
                <p>Your content & stats</p>
              </li>
              <li>
                <BsFillBookmarksFill className="lefticon" />
                <p>Bookmarks</p>
              </li>
              <li>
                <RiDraftFill className="lefticon" />
                <p>Drafts</p>
              </li>
            </ul>
          </li>
          <li className="dropdown_li">
            <ul className="indropli">
              <li className="inli">Dark mode</li>
              <li className="inli">Setting</li>
              <li className="inli">Language</li>
              <li className="inli">Help</li>
              <li className="inli">Logout</li>
            </ul>
          </li>
          <li className="dropdown_li"></li>
        </ul>
      </div>
    </>
  );
}

export { Header };
