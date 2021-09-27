import { getFollow, getPages, getUnfollow, getUsers } from "../../api/api";

const UPDATE_USERS_FILTER = "UPDATE_USERS_FILTER";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_isFetching = "TOGGLE_isFetching";
const IS_PROGRESS = "IS_PROGRESS";

const initialState = {
  users: [],
  usersFilter: "",
  pageSize: 18,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isProgress: [],
};
const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS_FILTER:
      state.usersFilter = action.searchTarget;
      return { ...state };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userid) {
            return { ...e, followed: true };
          }
          return e;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userid) {
            return { ...e, followed: false };
          }
          return e;
        }),
      };
    case TOGGLE_isFetching:
      return { ...state, isFetching: action.isFetching };
    case IS_PROGRESS:
      return {
        ...state,
        isProgress: action.isProgress
          ? [...state.isProgress, action.userId]
          : state.isProgress.filter((id) => id !== action.userId),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.e };
    default:
      return state;
  }
};
export const userFilterCreater = (searchTarget) => {
  return { type: UPDATE_USERS_FILTER, searchTarget };
};
export const userFollow = (userid) => {
  return { type: FOLLOW, userid };
};
export const userUnfollow = (userid) => {
  return { type: UNFOLLOW, userid };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setUsersTotalCount = (e) => {
  return { type: SET_TOTAL_USERS_COUNT, e };
};
export const setisFetching = (isFetching) => {
  return { type: TOGGLE_isFetching, isFetching };
};
export const setisProgress = (isProgress, userId) => {
  return { type: IS_PROGRESS, isProgress, userId };
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setisFetching(true));
    getUsers(currentPage, pageSize).then((res) => {
      dispatch(setUsers(res.data.items));
      dispatch(setUsersTotalCount(res.data.totalCount));
      dispatch(setisFetching(false));
    });
  };
};
export const getPagesThunkCreator = (e, pageSize) => {
  return (dispatch) => {
    dispatch(setisFetching(true));
    dispatch(setCurrentPage(e));
    getPages(e, pageSize).then((res) => {
      dispatch(setUsers(res.data.items));
      dispatch(setisFetching(false));
    });
  };
};
export const userFollowThunk = (id) => {
  return (dispatch) => {
    dispatch(setisProgress(true, id));
    getFollow(id).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(userFollow(id));
      }
      dispatch(setisProgress(false, id));
    });
  };
};
export const userUnfollowThunk = (id) => {
  return (dispatch) => {
    dispatch(setisProgress(true, id));
    getUnfollow(id).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(userUnfollow(id));
      }
      dispatch(setisProgress(false, id));
    });
  };
};

export default friendReducer;
