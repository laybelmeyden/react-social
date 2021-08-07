import { connect } from "react-redux";
import "./../App.scss";
import Profile from "./Profile";
import { addPostActionCreater, newTextPostActionCreater } from "./redux/profileReducer";

// const ProfileContainer = (props) => {
//   const postPublish = () => {
//     props.dispatch(addPostActionCreater());
//   };
//   let onPostChange = (text) => {
//     props.dispatch(newTextPostActionCreater(text));
//   };
//   return <Profile 
//   updateNewText={onPostChange} 
//   profilePageAddPost={postPublish} 
//   store={props.store}/>;
// };
const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewText: (text) => {
      dispatch(newTextPostActionCreater(text));
    },
    profilePageAddPost: () => {
      dispatch(addPostActionCreater());
    },
  };
};

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;
