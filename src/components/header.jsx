import React from "react";
import "./css/header.css";
import mainlogo from "./Images/mainlogo.png";

export default function header() {
  return (
    <>
      <div className="header">
        <div className="centered">
          <div className="logo-box">
            <a href="#">
              <img src={mainlogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
