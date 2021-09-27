import React from "react";
import Header from "../header/Header";
import { connect } from "react-redux";
import {
  setUserData,
  setisFetching,
  currentUserThunk,
} from "../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.currentUserThunk();
  }
  render() {
    return <Header {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
  };
};
export default connect(mapStateToProps, {
  setUserData,
  setisFetching,
  currentUserThunk,
})(HeaderContainer);
