import React from "react";
import "./rightbar.css";
import {Users} from "../../dummydata.js";
import Online from "../Online/online";
export default function rightbar({profile}){
    // console.log(Posts);
    const HomeRightbar = () =>{
        return(
       <div>
            <div className="birthdayContainer">
                   <img className="birthdayImg" src="/assets/gift.png" alt="loading"></img>
                   <span className="birthdayText">
                       <b>Pola Foster</b> and <b>3 others</b> have birthday today.
                   </span>
                   
               </div>
               <img className = "rightbarAd" src= "/assets/ad.png" alt="uploading"/>
               <h4 className="rightbarTitle">Online friends</h4>
               <ul className="rightbarFriendList">
                   {Users.map((u) =>(<Online key={u.id} user={u} />))}
                   
               </ul> 
       </div>
            
            )
        } 
        const ProfileRightbar = () =>{
return (

<>
<h4 className = "rightbarTitle">User information</h4> 
<div className = "rightbarInfo"> 
<div className = "rightbarInfoItem">
    <span className= "rightbarInfoKey">City:</span> 
    <span className= "rightbarInfoValue">Delhi</span> 
    </div>
    <div className = "rightbarInfoItem">
    <span className= "rightbarInfoKey">Education:</span> 
    <span className= "rightbarInfoValue">Btech</span> 
    </div>
    <div className = "rightbarInfoItem">
    <span className= "rightbarInfoKey">Relationship</span> 
    <span className= "rightbarInfoValue">Single</span> 
    </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/onkardp.jpg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Onkar </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/rajatdp.jpg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Rajat </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/hritikdp.jpg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Hritik </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Angel Priya  </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Ramesh </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/7.jpeg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Modi ji </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/8.jpeg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Rajjo </span>
        </div>
        <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/9.jpeg" alt="uploading"></img>
            <span className = "rightbarFollowingName"> Sharukh khan </span>
        </div>
    </div>

</>
)
        }
        return(
        <div className="rightbar">
           <div className="rightbarWrapper">
            {profile? <ProfileRightbar />:<HomeRightbar />}
              
           </div>
        </div>
        );
}
