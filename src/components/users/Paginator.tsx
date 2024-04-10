import React, { FC } from "react";
import s from "./users.module.css";

type UsersProps = {
  onClickChangePage: (page: number) => void;
  pages: number[];
  currentPage: number;
};

export const Paginator: FC<UsersProps> = (props) => {
  return (
    <div>
      {props.pages.map((page) => {
        return (
          <span
            key={page}
            onClick={() => props.onClickChangePage(page)}
            className={props.currentPage === page ? s.activePage : ""}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
