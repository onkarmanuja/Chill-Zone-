import React from 'react'
import "./online.css";
export default function online({user}) {
    return (
        <div>
         
            <li className="rightbarFriend ">
                   <div className = "rightbarProfileImgContainer">
                     <img className = "rightbarProfileImg"
                     src= {user.profilePicture} alt ="uploading "></img>
                       <span className = "rightbarOnline"> </span>
                       </div>
                       <span className = "rightbarUserName" >{user.username} </span>
                   </li>
        </div>
    )
}
