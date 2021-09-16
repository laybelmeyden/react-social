import "./../../../src/App.scss";
import {
  addMessage,
  updateNewMessageText,
} from "../redux/messageReducer";
import Message from "./Message";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
  };
};


const MessageContainer = connect(
  mapStateToProps,
  {
    updateNewMessageText,
    addMessage,
  }
)(Message);

export default MessageContainer;
