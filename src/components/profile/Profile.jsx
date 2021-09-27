import React from "react";
import "./../../App.scss";
import scssProfile from "./Profile.module.scss";
import Post from "../profile/Post";
import Loader from "../loader/loader";

const Profile = (props) => {
  const messageText = props.newPostText;
  const postPublish = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.currentTarget.value;
    props.newTextPost(text);
  };
  if (!props.profile || props.isFetching) return <Loader />;
  return (
    <div>
      <div className={`container ${scssProfile.grid__container}`}>
        <div className={scssProfile.item__left}>
          <div className={scssProfile.profile__img}>
            {/* <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" /> */}
            <img
              src={
                props.profile.photos.large ||
                "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"
              }
              alt=""
            />
          </div>
          <div className={scssProfile.profile__info}>
            <h3>
              {props.profile.fullName} /{" "}
              {props.profile.lookingForAJobDescription || "информации нет"}
            </h3>
            <div></div>
            <p>{props.profile.aboutMe || "информации нет"}</p>
          </div>
        </div>
        <div className={scssProfile.item__center}>
          <div className={scssProfile.publisher__input}>
            <div className={scssProfile.grid}>
              <div className={scssProfile.img}>
                <img
                  src={
                    props.profile.photos.small ||
                    "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"
                  }
                  alt=""
                />
              </div>
              <div className={scssProfile.share}>
                <input
                  type="text"
                  onChange={onPostChange}
                  value={messageText}
                  placeholder="Напишите что-нибудь"
                />
                <button onClick={postPublish}>Опубликовать</button>
              </div>
            </div>
          </div>
          {/*  */}
          {props.profilePage.userPosts.map((e, i) => (
            <Post userPostMessage={e.mess} key={i} profile={props.profile} />
          ))}
          {/*  */}
        </div>
        {/* <div className={scssProfile.item__right}>
          <h3>Уведомления</h3>
          <div className={scssProfile.hr}></div>
          <a href="#/">
            <div className={scssProfile.notification__grid}>
              <div className={scssProfile.img}>
              <img src={props.profile.photos.small || "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"} alt="" />
              </div>
              <div>
                <p>
                  <b>Любой может присоединиться к нам, если вы хотите</b>
                </p>
                <p>5 минут назад</p>
              </div>
            </div>
          </a>
          <a href="#/">
            <div className={scssProfile.notification__grid}>
              <div className={scssProfile.img}>
              <img src={props.profile.photos.small || "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"} alt="" />
              </div>
              <div>
                <p>
                  <b>Любой может присоединиться к нам, если вы хотите</b>
                </p>
                <p>5 минут назад</p>
              </div>
            </div>
          </a>
          <a href="#/">
            <div className={scssProfile.notification__grid}>
              <div className={scssProfile.img}>
              <img src={props.profile.photos.small || "https://img2.freepng.ru/20180410/loe/kisspng-user-computer-icons-anonymity-head-5acc3add493958.2652966915233338532999.jpg"} alt="" />
              </div>
              <div>
                <p>
                  <b>Любой может вступить</b>
                </p>
                <p>5 минут назад</p>
              </div>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
