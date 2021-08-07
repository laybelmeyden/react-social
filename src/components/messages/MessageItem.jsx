import React from "react";
import "./../../../src/App.scss";
import m from "./../messages/Message.module.scss";

const UserMessage = (user) => {
  return (
    <div>
      <div className={m.left}>
        <p>{user.message}</p>
      </div>
      <div className={m.right}>
        <p>{user.message}</p>
      </div>
    </div>
  );
};

export default UserMessage;
