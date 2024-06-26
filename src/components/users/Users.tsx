import React, { FC } from "react";
import { followTC, unFollowTC, userType } from "../../redux/usersReducer";
import defaultImg from "./../../assets/images/defaultImg.jpg";
import s from "./users.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Paginator } from "./Paginator";

type UsersProps = {
  totalUsersCount: number;
  pageSize: number;
  onClickChangePage: (page: number) => void;
  items: userType[];
  followingInProgress: number[];
};

export const Users: FC<UsersProps> = (props) => {
  const dispatch = useDispatch();

  const onUnFollowHandler = (id: number) => {
    dispatch(unFollowTC(id));
  };

  const onFollowHandler = (id: number) => {
    dispatch(followTC(id));
  };

  return (
    <>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onClickChangePage={props.onClickChangePage}
      />
      {props.items.map((us) => {
        const isDisabled = props.followingInProgress.some((id) => us.id === id);

        return (
          <div className={s.usersWrapper} key={us.id}>
            <span>
              <NavLink to={"/profile/" + us.id}>
                <div>
                  <img src={us.photos.large !== null ? us.photos.large : defaultImg} alt="av" className={s.userPhoto} />
                </div>
              </NavLink>
              <div>
                {/* 62 */}
                {us.followed ? (
                  <button disabled={isDisabled} onClick={() => onUnFollowHandler(us.id)}>
                    Un follow
                  </button>
                ) : (
                  <button disabled={isDisabled} onClick={() => onFollowHandler(us.id)}>
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{us.name}</div>
              <div>{us.status}</div>
            </span>
            <span>
              <div>{"us.location.country"}</div>
              <div>{"us.location.city"}</div>
            </span>
          </div>
        );
      })}
    </>
  );
};
