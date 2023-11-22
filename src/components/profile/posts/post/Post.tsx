import React, { FC } from "react";
import s from "./Post.module.css"

type PostTypeProps = {
   message:string
}
export const Post:FC<PostTypeProps> = ({message}) => {
   return (
      <div className={s.item }>
         <img src="https://i.ebayimg.com/images/g/wSQAAOSw52hgr6iQ/s-l1200.webp" alt="ava" />
         {message}
      </div>
   );
};