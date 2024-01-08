import React, { FC, LegacyRef, RefObject } from "react";
import s from "./Posts.module.css"
import { Post } from "./post/Post";
import { addTaskAC, filterActionType, postDataType, updateTaskAC } from "../../../redux/state";


type PostsType = {
   postsData: postDataType[]
   newPostText:string
   dispatch:(action:filterActionType)=>void

}

export const Posts: FC<PostsType> = ({ postsData,newPostText ,dispatch}) => {

   let newPostRef: RefObject<HTMLTextAreaElement> = React.createRef();
   const onClickHandler = () => {
         // addPost()
         dispatch(addTaskAC())

   }

   const onChangeHandler = () => {
      const text = newPostRef.current?.value
      if (text) {
         // updateNewPostText(text)
         dispatch(updateTaskAC(text))
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