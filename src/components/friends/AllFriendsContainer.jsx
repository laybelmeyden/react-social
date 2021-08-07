import { connect } from "react-redux";
import AllFriends from './../friends/AllFriends'
import { UserFilterActionCreater } from "./../redux/friendReducer";

const mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    UserFilterActionCreater: (searchTarget) =>{
      dispatch(UserFilterActionCreater(searchTarget));
    }
  };
};

const AllFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFriends);

export default AllFriendsContainer;
