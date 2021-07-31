const ADD_POST = "ADD_POST";
const NEW_TEXT_POST = "NEW_TEXT_POST";

const initialState = {
  userPosts: [{ id: 1, mess: "test", like: 0 }],
  newPostText: "Напишите что нибудь",
}

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 5555,
      mess: state.newPostText,
      like: 0,
    };
    state.userPosts.push(newPost);
    state.newPostText = "";
  }
  if (action.type === NEW_TEXT_POST) {
    state.newPostText = action.newText;
  }
  return state;
};
export const addPostActionCreater = () => {
    return { type: ADD_POST };
  };
  export const newTextPostActionCreater = (addPost) => {
    return { type: NEW_TEXT_POST, newText: addPost };
  };
export default profileReducer;
