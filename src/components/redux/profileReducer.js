const ADD_POST = "ADD_POST";
const NEW_TEXT_POST = "NEW_TEXT_POST";

const initialState = {
  userPosts: [{ id: 0, mess: "test", like: 0 }],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  const stateCopy = {...state};
  if (action.type === ADD_POST) {
    const newPost = {
      id: 5555,
      mess: stateCopy.newPostText,
      like: 0,
    };
    stateCopy.userPosts = [...state.userPosts];
    stateCopy.userPosts.push(newPost);
    stateCopy.newPostText = "";
  }
  if (action.type === NEW_TEXT_POST) {
    stateCopy.newPostText = action.newText;
  }
  return stateCopy;
};
export const addPostActionCreater = () => {
    return { type: ADD_POST };
  };
  export const newTextPostActionCreater = (addPost) => {
    return { type: NEW_TEXT_POST, newText: addPost};
  };
export default profileReducer;
