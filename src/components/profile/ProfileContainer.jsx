import React from "react";
import { connect } from "react-redux";
import "./../../App.scss";
import Profile from "../profile/Profile";
import {
  addPost,
  newTextPost,
  setUserProfile,
  setisFetching,
  currentProfileThunk,
} from "../redux/profileReducer";
import { withRouter } from "react-router";

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.currentProfileThunk(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isFetching={this.props.isFetching}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    isFetching: state.friendsPage.isFetching,
  };
};
const urlData = withRouter(ProfileContainerAPI);
const ProfileContainer = connect(mapStateToProps, {
  newTextPost,
  addPost,
  setUserProfile,
  setisFetching,
  currentProfileThunk
})(urlData);

export default ProfileContainer;
