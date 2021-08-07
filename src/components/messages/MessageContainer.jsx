import "./../../../src/App.scss";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../redux/messageReducer";
import Message from "./Message";
import { connect } from "react-redux";

// const MessageContainer = (props) => {
//   const onNewMessageTextChange = (text) => {
//     props.dispatch(updateNewMessageTextCreator(text));
//   };
//   const userMessage = () => {
//     props.dispatch(addMessageCreator());
//   };
//   return (
//     <Message
//       updateNewMessageTextCreator={onNewMessageTextChange}
//       addMessageCreator={userMessage}
//       store={props.store}
//     />
//   );
// };
const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageTextCreator: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    addMessageCreator: () => {
      dispatch(addMessageCreator());
    },
  };
};

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

export default MessageContainer;
