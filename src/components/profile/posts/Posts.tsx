import React, { FC, LegacyRef, RefObject } from "react";
import s from "./Posts.module.css"
import { Post } from "./post/Post";
import { postDataType } from "../../../redux/state";


type PostsType = {
   postsData: postDataType[]
   addPost: () => void
   newPostText:string
   updateNewPostText:(i: string)=>void

}

export const Posts: FC<PostsType> = ({ postsData, addPost,newPostText ,updateNewPostText}) => {

   let newPostRef: RefObject<HTMLTextAreaElement> = React.createRef();
   const onClickHandler = () => {
         addPost()

   }

   const onChangeHandler = () => {
      const text = newPostRef.current?.value
      if (text) {
         updateNewPostText(text)
      }

   }


   return (
      <div>
         <div>
            <div>new post</div>
            <textarea onChange={onChangeHandler} ref={newPostRef} name="Post New" value={newPostText}></textarea>
            <button onClick={onClickHandler}>+</button>
            {postsData.map(el => {
               return (
                  <Post key={el.id} message={el.message} />
               )
            })}

         </div>

      </div>
   );
};