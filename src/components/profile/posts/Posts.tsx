import React, { FC, RefObject } from "react";
import { Post } from "./post/Post";
import { postDataType } from "../../../redux/state";
import { PostsForm } from "./PostsForm";


type PostsType = {
   postsData: postDataType[]
   sendPost: (text: string) => void

}

export const Posts: FC<PostsType> = ({ postsData, sendPost }) => {

   return (
      <div>
         <div>
            <PostsForm sendPost={sendPost} />
            {postsData.map(el => {
               return (
                  <Post key={el.id} message={el.message} />
               )
            })}
         </div>
      </div>
   );
};