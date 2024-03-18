import React, { FC } from "react";
import s from './AvatarBlock.module.css'
import { responseProfileType } from "../../../redux/post-reducer";

type avatrBlockProps = {
   profile: responseProfileType

}
export const AvatarBlock: FC<avatrBlockProps> = ({ profile }) => {
   return (
      <>
         <div>
            <img src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg" alt="" />
         </div>
 
      </>
   );
};