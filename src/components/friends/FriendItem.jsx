import React from "react";
import { NavLink } from "react-router-dom";
import "./../../App.scss";
import scssFriends from "./Friends.module.scss";
const FriendItem = (props) => {
  return (
    <div>
      <NavLink to={"/profile/" + props.id}>
        <div className={scssFriends.img__container}>
          <img
            src={
              props.item.photos.small ||
              "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"
            }
            alt=""
          />
        </div>
      </NavLink>
      <div className={scssFriends.text__container}>
        <p className={scssFriends.item__name}>{props.item.name}</p>
        <p className={scssFriends.item__city}>{props.item.id}</p>
        <div className={scssFriends.btn__container}>
          {console.log(props)}
          {props.item.followed ? (
            <button
              disabled={props.isProgress.some((id) => id === props.item.id)}
              onClick={() => {props.userUnfollowThunk(props.item.id)}}
            >
              Отписаться
            </button>
          ) : (
            <button
              disabled={props.isProgress.some((id) => id === props.item.id)}
              className={scssFriends.follow}
              onClick={() => {props.userFollowThunk(props.item.id)}}
            >
              Подписаться
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
