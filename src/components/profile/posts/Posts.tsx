import React, { FC } from "react";
import s from "./Posts.module.css"
import { Post } from "./post/Post";
import { postDataType } from "../../..";

type PostsType = {
   postsData: postDataType[]
}

export const Posts: FC<PostsType> = ({ postsData }) => {
   return (
      <div>
         <div>
            <div>new post</div>
            <textarea name="Post New"></textarea>
            <button>+</button>
            {postsData.map(el => {
               return (
                  <Post key={el.id} message={el.message} />
               )
            })}

         </div>

      </div>
   );
};