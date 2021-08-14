import React from "react";
import "./../../App.scss";
import scssFriends from "./../../css_modules/Friends.module.scss";
import FriendItem from "./FriendItem";
import axios from 'axios';

const AllFriends = (props) => {
  if(props.friendsPage.users.length === 0){
    axios
    .get("https://6102c79279ed680017482303.mockapi.io/users")
    .then( res => props.setUsers(res.data))
  }
  const searchText = props.friendsPage.usersFilter;
  const onFriendsChange = (e) => {
    const searchTarget = e.target.value;
    props.UserFilterActionCreater(searchTarget);
  };
  return (
    <div className="container">
      <div className={scssFriends.publisher__input}>
        <div className={scssFriends.grid}>
          <div className={scssFriends.img}>
            <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
          </div>
          <div className={scssFriends.share}>
            <input
              type="text"
              onChange={onFriendsChange}
              value={searchText}
              placeholder="Введите имя пользователя"
            />
          </div>
        </div>
      </div>
      {searchText && <h1>{`Поиск: ${searchText}`}</h1>}
      <div className={scssFriends.grid_users}>
        {props.friendsPage.users
          .filter((e) =>e.name.toLowerCase().includes(searchText.toLowerCase()))
          .map((item, index) => (
            <FriendItem
              item={item}
              key={index}
              id={item.id}
              userFollow={props.userFollow}
              userUnfollow={props.userUnfollow}
            />
          ))}
      </div>
    </div>
  );
};

export default AllFriends;
