import React from "react";
import { connect } from "react-redux";
import {
  userFilterCreater,
  getUsersThunkCreator,
  getPagesThunkCreator,
  userUnfollowThunk,
  userFollowThunk,
} from "./../redux/friendReducer";
import Users from "./Users";
class UsersAPIComponent extends React.Component {
  // constructor(props){
  //     super(props);
  // }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  render() {
    const onFriendsChange = (e) => {
      const searchTarget = e.target.value;
      this.props.userFilterCreater(searchTarget);
    };
    const currentPageClick = (e) => {
      this.props.getPages(e, this.props.pageSize);
    };
    return (
      <Users
        onFriendsChange={onFriendsChange}
        currentPageClick={currentPageClick}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        friendsPage={this.props.friendsPage}
        userFollowThunk={this.props.userFollowThunk}
        userUnfollowThunk={this.props.userUnfollowThunk}
        isFetching={this.props.isFetching}
        isProgress={this.props.isProgress}
        setisProgress={this.props.setisProgress}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    isProgress: state.friendsPage.isProgress,
    setisProgress: state.friendsPage.setisProgress,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     UserFilterActionCreater: (searchTarget) => {
//       dispatch(userFilterActionCreater(searchTarget));
//     },
//     userFollow: (userid) => {
//       dispatch(userFollow(userid));
//     },
//     userUnfollow: (userid) => {
//       dispatch(userUnfollow(userid));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     setUsersTotalCount: (totalCount) => {
//       dispatch(setUsersTotalCount(totalCount));
//     },
//     setisFetching: (isFetching) => {
//       dispatch(setisFetching(isFetching));
//     },
//   };
// };

const AllFriendsContainer = connect(mapStateToProps, {
  userFilterCreater,
  getUsers: getUsersThunkCreator,
  getPages: getPagesThunkCreator,
  userFollowThunk,
  userUnfollowThunk,
})(UsersAPIComponent);

export default AllFriendsContainer;
