import React, { FC } from "react";
import s from "./users.module.css";
import { Pagination, PaginationProps } from "antd";
import "antd/dist/antd.min.css";

type UsersProps = {
  totalUsersCount: number;
  pageSize: number;
  onClickChangePage: (page: number) => void;
};

export const Paginator: FC<UsersProps> = (props) => {
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    props.onClickChangePage(pageNumber);
  };
  return (
    <div>
      <Pagination onChange={onChange} pageSize={props.pageSize} total={props.totalUsersCount} />

      {/* {props.pages.map((page) => {
        return (
          <span
            style={{ border: "1px solid black", margin: 1, padding: 1 }}
            key={page}
            onClick={() => props.onClickChangePage(page)}
            className={props.currentPage === page ? s.activePage : ""}
          >
            {page}
          </span>
        );
      })} */}
    </div>
  );
};
