import React from "react";
import "./../App.scss";
import scssProfile from "./../css_modules/Profile.module.scss";

const Post = (props) => {
  const newDate = new Date();
  return (
    <div>
      <div className={scssProfile.publisher__post}>
        <div className={scssProfile.items}>
          <div className={scssProfile.top_nav_item}>
            <div className={scssProfile.img}>
              <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
            </div>
            <div>
              <p>
                <b>Kate Palson</b>
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
