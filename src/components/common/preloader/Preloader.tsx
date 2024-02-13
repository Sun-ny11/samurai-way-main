import React, { FC } from "react";
import Spiner from "./../../../assets/images/Spinner.gif"

type PreloaderProps = {

}

export const Preloader: FC<PreloaderProps> = ({ }) => {
   return (
      <>
         <img src={Spiner} />
      </>
   );
};