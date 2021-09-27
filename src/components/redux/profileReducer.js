import { getCurrentProfile, getCurrentProfileId } from "../../api/api";

const ADD_POST = "ADD_POST";
const NEW_TEXT_POST = "NEW_TEXT_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_isFetching = "TOGGLE_isFetching";

const initialState = {
  userPosts: [{ id: 0, mess: "test", like: 0 }],
  newPostText: "",
  profile: null,
  isFetching: true,
  userId: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5555,
        mess: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        userPosts: [...state.userPosts, newPost],
        newPostText: ""
      };
    case NEW_TEXT_POST:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:{
      return{
        ...state, profile: action.profile
      }
    }
    case TOGGLE_isFetching:
      return { ...state, isFetching: action.isFetching }
    default:
      return state;
  }
};
export const addPost = () => {
  return { type: ADD_POST };
};
export const newTextPost = (addPost) => {
  return { type: NEW_TEXT_POST, newText: addPost };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setisFetching = (isFetching) => {
  return { type: TOGGLE_isFetching, isFetching };
};

export const currentProfileThunk = (userId) => {
  return (dispatch) => {
    dispatch(setisFetching(true));
    getCurrentProfile()
      .then((res) => {
        if(res.data.resultCode === 0){
          getCurrentProfileId(userId, res.data.data.id).then((res) => {
            dispatch(setUserProfile(res.data));
            dispatch(setisFetching(false));
          });
        }
      });
  };
};

export default profileReducer;
