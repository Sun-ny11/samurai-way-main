import React from "react";
import s from "./Posts.module.css"
import { Post } from "./post/Post";

export const Posts = () => {
   return (
      <div>
         <div>
            <div>new post</div>
            <textarea name="Post New"></textarea>
            <button>+</button>
            <Post message="Hi!"/>
            <Post message="My new account"/>
         </div>

      </div>
   );
};