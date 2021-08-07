import React from "react";
import "./../../App.scss";
import scssFriends from "./../../css_modules/Friends.module.scss";
import FriendItem from "./FriendItem";


const AllFriends = (props) => {
  const searchText = props.friendsPage.usersFilter;
  const onFriendsChange = (e) => {
    const searchTarget = e.target.value;
    props.UserFilterActionCreater(searchTarget);
  }
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
            <div className={scssFriends.co}>
            {props.friendsPage.users.filter(e => e.name.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => (
            <FriendItem name={item.name} key={index} avatar={item.avatar}/>
            ))}
            </div>
        </div>
    );
}

export default AllFriends