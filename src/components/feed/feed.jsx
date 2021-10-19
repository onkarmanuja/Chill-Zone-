import React from "react";
import Post from "../post/post"
import "./feed.css";
import Share from "../share/share";
import {Posts} from "../../dummydata.js";
export default function feed(){
    return(
        <div className="feed">
          <div className="feedWrapper">
              <Share />
              {Posts.map((p)=>(
                  <Post key={p.id} post={p}/>
                  
              ))}
          </div>
        </div>
    )
}