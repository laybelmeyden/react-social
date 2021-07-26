import React from "react";
import "./../../../src/App.scss";
import m from "./../messages/Message.module.scss";
import { NavLink } from "react-router-dom";
import {addMessageCreator, updateNewMessageTextCreator} from './../redux/state'

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
const UserMessage = (user) =>{
    return(
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

const Message = (props) => {
  const newMessageText = props.state.newMessageText;
  const onNewMessageTextChange = (e) =>{
      const currentValue = e.currentTarget.value;
      props.dispatch(updateNewMessageTextCreator(currentValue));
  }
  const userMessage = () =>{
    props.dispatch(addMessageCreator());
  }
  return (
    <div className="container">
      <div className={m.grid__container}>
        <div className={m.blocks__sidebar}>
          {props.state.userDialogs.map(e => <UserNameMessage user_name={e.name} id={e.id} key={e.id}/>)}
        </div>
        <div className={m.blocks__messages}>
          <div className={m.item__messages}>
          {props.state.userDialodsMessages.map(e => (<UserMessage message={e.mess} key={e.id}/>))}
          </div>
          <div className={m.textarea}>
            <textarea 
            onChange={onNewMessageTextChange}
            value={newMessageText} 
            placeholder="Введите ваше сообщение"></textarea>
            <button onClick={userMessage}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
