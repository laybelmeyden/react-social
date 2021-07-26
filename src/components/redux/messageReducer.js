const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

const messageReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    const newPost = {
      id: 5555,
      mess: state.newMessageText,
    };
    state.userDialodsMessages.push(newPost);
    state.newMessageText = "";
  }
  if (action.type === UPDATE_NEW_MESSAGE) {
    state.newMessageText = action.newText;
  }
  return state;
};
export default messageReducer;
