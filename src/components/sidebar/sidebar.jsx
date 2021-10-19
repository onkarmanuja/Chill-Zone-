import React from "react";
import "./sidebar.css";
import {Users} from "../../dummydata.js";
import CloseFriend from "../closefriend/closefriend";
import {RssFeed,Chat,SlowMotionVideoRounded,PeopleAltRounded,BookmarkRounded,QuestionAnswerRounded
,WorkOutlineRounded,EmojiEventsRounded,School} from "@material-ui/icons";
export default function sidebar(){
    return(
        <div className="sidebar">
        <div className="sidebarwrapper">
         <ul className="sidebarList">
         <li className="sidebarListItem">
           <RssFeed className="sidebaricon"/>
           <span class="sidebarListItemText">Feed</span>
         </li>
         <li className="sidebarListItem">
           <Chat className="sidebaricon"/>
           <span class="sidebarListItemText">Chats</span>
         </li>
         <li className="sidebarListItem">
           <SlowMotionVideoRounded className="sidebaricon"/>
           <span class="sidebarListItemText">Videos</span>
         </li>
         <li className="sidebarListItem">
           <PeopleAltRounded className="sidebaricon"/>
           <span class="sidebarListItemText">Groups</span>
         </li>
         <li className="sidebarListItem">
           <BookmarkRounded className="sidebaricon"/>
           <span class="sidebarListItemText">Bookmarks</span>
         </li>
         <li className="sidebarListItem">
           <QuestionAnswerRounded className="sidebaricon"/>
           <span class="sidebarListItemText">Questions</span>
         </li>
         <li className="sidebarListItem">
           <WorkOutlineRounded className="sidebaricon"/>
           <span class="sidebarListItemText">Jobs</span>
         </li>
         <li className="sidebarListItem">
           <EmojiEventsRounded className="sidebaricon"/>
           <span class="sidebarListItemText">Events</span>
         </li>
         <li className="sidebarListItem">
           <School className="sidebaricon"/>
           <span class="sidebarListItemText">Courses</span>
         </li>
         </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            {Users.map((u)=>(
              <CloseFriend key={u.id} user={u} />
            ))}
        </ul>
        </div>
           
        </div>
    )
}