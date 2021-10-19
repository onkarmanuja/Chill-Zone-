import React from 'react'
import "./login.css";
export default function login() {
    return (
        <div className="login">
            <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginLogo">Chill Zone 🧊</h3>
                <span className="loginDesc">Your vibe attracts your tribe. 🤝 </span>
                <div className = "LogoImgInfo" >
                <img src = "assets/logo.jpeg" className = "LogoImg" alt="loading" ></img>
                </div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegistrationButton">Create a new account</button>
                </div>
            </div>
            </div>
        </div>
    )
}
