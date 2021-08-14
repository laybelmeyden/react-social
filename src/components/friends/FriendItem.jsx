import React from "react";
import "./../../App.scss";
import scssFriends from "./../../css_modules/Friends.module.scss";

const FriendItem = (props) => {
  return (
    <div>
      <div className={scssFriends.img__container}>
        <img src={props.item.avatar} alt="" />
      </div>
      <div className={scssFriends.text__container}>
        <p className={scssFriends.item__name}>{props.item.name}</p>
        <p className={scssFriends.item__city}>{props.item.city}</p>
        <p className={scssFriends.item__text}>{props.item.text.slice(0, 20) + '...'}</p>
        <div className={scssFriends.btn__container}>
        {props.item.follower ? 
          <button onClick={()=>{props.userUnfollow(props.item.id)}}>Отписаться</button>:
          <button className={scssFriends.follow}  onClick={()=>{props.userFollow(props.item.id)}}>Подписаться</button>} 
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
