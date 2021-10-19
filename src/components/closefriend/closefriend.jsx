import React from 'react'
import "./closefriend.css";
export default function closefriend({user}) {
    return (
        <div>
           <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={user.profilePicture} alt="uploading" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
