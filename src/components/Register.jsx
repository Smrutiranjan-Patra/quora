import React, { useState } from "react";
import "./css/register.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // let navigate = useNavigate();
  const signIn = () => {};

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt=""
          />
        </div>
        <div className="register__desc">
          <p>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="register__middle">
          <div className="register__authOptions">
            <div className="register__authOption">
              <img
                className="register__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <a href="http://localhost:2333/auth/google">
                Continue With Google
              </a>
            </div>
            <div className="register__authOption">
              <img
                className="register__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="register__authDesc">
              <p>
                By continuing you indicate that you agree to Quora’s{" "}
                <span>Terms of Service </span> and <span>Privacy Policy</span>.
              </p>
            </div>
          </div>
          <div className="register__emailPass">
            <div className="register__label">
              <h4>Login</h4>
            </div>
            <div className="register__inputFields">
              <div className="register__inputField">
                <h4>Email</h4>
              </div>
              <div className="register__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="register__inputField">
                <h4>Password</h4>
              </div>
              <div className="register__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="register__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
          </div>
        </div>
        <div className="register__lang">
          <p>বাংলা</p>
          {">"} <p>हिन्दी</p> {">"}
        </div>
        <div className="register__footer">
          <p>About .</p>
          <p>Careers .</p>
          <p>Privacy</p>
          <p>Terms .</p>
          <p>Contact .</p>
          <p>Languages .</p>
          <p>Your Ad Choices .</p>
          <p>&copy; Quora, Inc. 2022</p>
        </div>
      </div>
    </div>
  );
};
