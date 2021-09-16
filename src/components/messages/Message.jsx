import React from "react";
import "./../../../src/App.scss";
import m from "./../messages/Message.module.scss";
import UserMessage from './MessageItem'
import UserNameMessage from './UserItem'


const Message = (props) => {
  const messageText = props.newMessageText;
  const onNewMessageTextChange = (e) => {
    const text = e.currentTarget.value;
    props.updateNewMessageText(text);
  };
  const userMessage = () => {
    props.addMessage();
  };
  return (
    <div className="container">
      <div className={m.grid__container}>
        <div className={m.blocks__sidebar}>
          {props.messagesPage.userDialogs.map((e, i) => (
            <UserNameMessage user_name={e.name} id={e.id} key={i} />
          ))}
        </div>
        <div className={m.blocks__messages}>
          <div className={m.item__messages}>
            {props.messagesPage.userDialodsMessages.map((e, i) => (
              <UserMessage message={e.mess} key={i} />
            ))}
          </div>
          <div className={m.textarea}>
            <textarea
              onChange={onNewMessageTextChange}
              value={messageText}
              placeholder="Введите ваше сообщение"
            ></textarea>
            <button onClick={userMessage}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
