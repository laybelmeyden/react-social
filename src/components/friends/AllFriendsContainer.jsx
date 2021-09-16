import React from "react";
import { connect } from "react-redux";
import {
  setUsers,
  userFilterCreater,
  userFollow,
  userUnfollow,
  setCurrentPage,
  setUsersTotalCount,
  setisFetching,
} from "./../redux/friendReducer";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  // constructor(props){
  //     super(props);
  // }
  componentDidMount() {
    this.props.setisFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setUsersTotalCount(res.data.totalCount);
        this.props.setisFetching(false);
      });
  }
  render() {
    const onFriendsChange = (e) => {
      const searchTarget = e.target.value;
      this.props.userFilterCreater(searchTarget);
    };
    const currentPageClick = (e) => {
      this.props.setisFetching(true);
      this.props.setCurrentPage(e);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.pageSize}`
        )
        .then((res) => {
          this.props.setUsers(res.data.items);
          this.props.setisFetching(false);
        });
    };
    return (
          <Users
            onFriendsChange={onFriendsChange}
            currentPageClick={currentPageClick}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            friendsPage={this.props.friendsPage}
            userFollow={this.props.userFollow}
            userUnfollow={this.props.userUnfollow}
            isFetching={this.props.isFetching}
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

const AllFriendsContainer = connect(
  mapStateToProps,
  {
    userFilterCreater,
    userFollow,
    userUnfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setisFetching,

  }
)(UsersAPIComponent);

export default AllFriendsContainer;
