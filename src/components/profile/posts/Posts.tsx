import React, { FC, RefObject } from "react";
import { Post } from "./post/Post";
import { postDataType } from "../../../redux/state";


type PostsType = {
   postsData: postDataType[]
   newPostText: string
   newPostBody: (body: string) => void
   sendPostOnClick: () => void

}

export const Posts: FC<PostsType> = ({ postsData, newPostText, newPostBody, sendPostOnClick }) => {

   let newPostRef: RefObject<HTMLTextAreaElement> = React.createRef();
   const onClickHandler = () => {

      sendPostOnClick()
   }

   const onChangeHandler = () => {
      const text = newPostRef.current?.value
      if (text) {
         newPostBody(text)
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