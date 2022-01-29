import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Feed() {
  const [user,setUser]= useState({})
  

  return (  
    <div className="feed">
      <div className="feedWrapper">
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}