const ADD_POST = "ADD_POST";
const NEW_TEXT_POST = "NEW-TEXT-POST";
const profileReducer = (state, action) => {
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
export default profileReducer;
