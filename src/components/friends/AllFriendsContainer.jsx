import { connect } from "react-redux";
import AllFriends from './../friends/AllFriends'
import { setUsers, userFilterActionCreater, userFollow, userUnfollow } from "./../redux/friendReducer";

const mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    UserFilterActionCreater: (searchTarget) =>{
      dispatch(userFilterActionCreater(searchTarget));
    },
    userFollow: (userid) => {
      dispatch(userFollow(userid))
    },
    userUnfollow: (userid) => {
      dispatch(userUnfollow(userid))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    }
  };
};

const AllFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFriends);

export default AllFriendsContainer;
