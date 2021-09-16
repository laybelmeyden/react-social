import React from "react";
import { connect } from "react-redux";
import "./../../App.scss";
import Profile from "../profile/Profile";
import axios from "axios";
import { addPost, newTextPost, setUserProfile, setisFetching } from "../redux/profileReducer";
import { withRouter } from "react-router";

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setisFetching(true);
    let userId = this.props.match.params.userId;
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 19598}`)
    .then((res) => {
      this.props.setUserProfile(res.data);
      this.props.setisFetching(false);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching}/>;
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
})(urlData);

export default ProfileContainer;
