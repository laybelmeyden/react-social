import React from "react";
import "./../App.scss";
import scssProfile from "./../css_modules/Profile.module.scss";
import Post from "./Post";
import {addPostActionCreater, newTextPostActionCreater} from './redux/state'

const Profile = (props) => {
  const inputPost = React.createRef();
  const postPublish = () => {
    // props.profilePageAddPost();
    props.dispatch(addPostActionCreater());
  };
  let onPostChange = () =>{
    let addPost = inputPost.current.value;
    // props.updateNewText(addPost);
    props.dispatch(newTextPostActionCreater(addPost))
  }
  return (
    <div>
      <div className={`container ${scssProfile.grid__container}`}>
        <div className={scssProfile.item__left}>
          <div className={scssProfile.profile__img}>
            <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
          </div>
          <div className={scssProfile.profile__info}>
            <h3>Тул Ларпер</h3>
            <div></div>
            <p>
              Я не знаю, как это сделать? Но я верю, что однажды это возможно,
              если я все время буду оставаться со своей мечтой
            </p>
          </div>
        </div>
        <div className={scssProfile.item__center}>
          <div className={scssProfile.publisher__input}>
            <div className={scssProfile.grid}>
              <div className={scssProfile.img}>
                <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
              </div>
              <div className={scssProfile.share}>
                <input
                  type="text"
                  ref={inputPost}
                  onChange={onPostChange}
                  value={props.state.newPostText}
                  placeholder="Напишите что-нибудь"
                />
                <button onClick={postPublish}>Опубликовать</button>
              </div>
            </div>
          </div>
          {/*  */}
          {props.state.userPosts.map((e) => (
            <Post userPostMessage={e.mess} key={e.id}/>
          ))}
          {/*  */}
        </div>
        <div className={scssProfile.item__right}>
          <h3>Уведомления</h3>
          <div className={scssProfile.hr}></div>
          <a href="#/">
            <div className={scssProfile.notification__grid}>
              <div className={scssProfile.img}>
                <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
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
                <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
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
                <img src="./../dump-it-bogdanov-s-telefonom.jpg" alt="" />
              </div>
              <div>
                <p>
                  <b>Любой может вступить</b>
                </p>
                <p>5 минут назад</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
