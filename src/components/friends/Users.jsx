import React from "react";
import scssFriends from "./../../css_modules/Friends.module.scss";
import FriendItem from "./FriendItem";
import classNames from "classnames";
import Loader from "../loader/loader";

const Users = (props) => {
  const now = props.currentPage;
  const setPaginationBtnClasses = (p, firstButton, lastButton) => {
    return classNames({
      [scssFriends.active]: now === p,
      [scssFriends.firstButton]: firstButton,
      [scssFriends.lastButton]: lastButton,
    });
  };
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const searchText = props.friendsPage.usersFilter;
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
              onChange={props.onFriendsChange}
              value={searchText}
              placeholder="Введите имя пользователя"
            />
          </div>
        </div>
      </div>
      {searchText && <h1>{`Поиск: ${searchText}`}</h1>}
      <div className={props.isFetching ? null : scssFriends.grid_users }>
        {props.isFetching ? <Loader /> : props.friendsPage.users
          .filter((e) =>
            e.name.toLowerCase().includes(searchText.toLowerCase())
          )
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
      <div className={scssFriends.paginate__container}>
        <ul>
          {pages.map((e, i) => {
            if ((e < now + 3 && e > now - 3) || e === 1 || e === pages.length) {
              return (
                <li key={i}>
                  <span
                    className={setPaginationBtnClasses(
                      e,
                      now > e + 3,
                      e === pages.length && now < e - 4
                    )}
                    onClick={() => {
                      props.currentPageClick(e);
                    }}
                  >
                    {e}
                  </span>
                </li>
              );
            }
            return false
          })}
        </ul>
      </div>
    </div>
  );
};

export default Users;
