const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

const initialState = {
  userDialogs: [{ id: 1, name: "name1" }],
  userDialodsMessages: [{ id: 1, mess: "mess1" }],
  newMessageText: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newPost = {
            id: 5555,
            mess: state.newMessageText,
          };
    return {
      ...state,
      userDialodsMessages: [...state.userDialodsMessages, newPost],
      newMessageText: ""
    }
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.newText
      }
    default:
      return state;
  }
};
export const addMessage = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageText = (addPost) => {
  return { type: UPDATE_NEW_MESSAGE, newText: addPost };
};
export default messageReducer;
