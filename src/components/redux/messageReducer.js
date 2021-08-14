const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";


const initialState = {
  userDialogs: [
    { id: 1, name: "name1" },
  ],
  userDialodsMessages: [
    { id: 1, mess: "mess1" },

  ],
  newMessageText: "",
}

const messageReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    userDialodsMessages: [...state.userDialodsMessages]
  };
  if (action.type === ADD_MESSAGE) {
    const newPost = {
      id: 5555,
      mess: stateCopy.newMessageText,
    };
    stateCopy.userDialodsMessages.push(newPost);
    stateCopy.newMessageText = "";
  }
  if (action.type === UPDATE_NEW_MESSAGE) {
    stateCopy.newMessageText = action.newText;
  }
  return stateCopy;
};
export const addMessageCreator = () => {
    return { type: ADD_MESSAGE };
  };
  export const updateNewMessageTextCreator = (addPost) => {
    return { type: UPDATE_NEW_MESSAGE, newText: addPost };
  };
export default messageReducer;
