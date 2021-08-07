import React from "react";
import "./../../../src/App.scss";
import m from "./../messages/Message.module.scss";
import { NavLink } from "react-router-dom";

const UserNameMessage = (user) => {
  return (
    <NavLink to={`/messages/${user.id}`} activeClassName={m.activedialogs}>
      <div className={m.item}>
        <div className={m.img}>
          <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
        </div>
        <div className={m.user__name}>
          <p>{user.user_name}</p>
        </div>
      </div>
    </NavLink>
  );
};
export default UserNameMessage;
