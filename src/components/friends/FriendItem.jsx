import React from "react";
import "./../../App.scss";
import scssFriends from "./../../css_modules/Friends.module.scss";

const FriendItem = (props) => {
  return (
    <div>
      <div className={scssFriends.img__container}>
        <img src={props.item.photos.small || "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"} alt="" />
      </div>
      <div className={scssFriends.text__container}>
        <p className={scssFriends.item__name}>{props.item.name}</p>
        <p className={scssFriends.item__city}>{props.item.id}</p>
        {/* <p className={scssFriends.item__text}>{props.item.text.slice(0, 20) + '...'}</p> */}
        <div className={scssFriends.btn__container}>
        {props.item.followed ? 
          <button onClick={()=>{props.userUnfollow(props.item.id)}}>Отписаться</button>:
          <button className={scssFriends.follow}  onClick={()=>{props.userFollow(props.item.id)}}>Подписаться</button>} 
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
