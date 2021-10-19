import React from 'react'
import "./register.css";
export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginLogo">Chill Zone 🧊</h3>
                <span className="loginDesc">Your vibe attracts your tribe. 🤝</span>
                <div className = "LogoImgInfo" >
                <img src = "assets/logo.jpeg" className = "LogoImg" alt="loading" ></img>
                </div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <input placeholder="Confirm Password" className="loginInput"/>
                    <button className="loginButton">Sign Up</button>
                   
                    <button className="loginRegistrationButton">Login to your Account!</button>
                </div>
            </div>
            </div>
        </div>
    )
}
