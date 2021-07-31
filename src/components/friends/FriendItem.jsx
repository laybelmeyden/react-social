import React from "react";
import "./../../App.scss";
import scssFriends from "./../../css_modules/Friends.module.scss";

const FriendItem = (props) => {
    return (
        <div>
            <div className={scssFriends.ds}>
                <img src={props.avatar} alt="" />
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default FriendItem;