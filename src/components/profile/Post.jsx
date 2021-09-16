import React from "react";
import "./../../App.scss";
import scssProfile from "./../../css_modules/Profile.module.scss";

const Post = (props) => {
  const newDate = new Date();
  return (
    <div>
      <div className={scssProfile.publisher__post}>
        <div className={scssProfile.items}>
          <div className={scssProfile.top_nav_item}>
            <div className={scssProfile.img}>
            <img src={props.profile.photos.small || "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"} alt="" />
            </div>
            <div>
              <p>
                <b>{props.profile.fullName}</b>
              </p>
              <p>{newDate.getMinutes()} min ago</p>
            </div>
            <div className={scssProfile.post_settings_bar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p className={scssProfile.post_title}>
            {props.userPostMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
