const UPDATE_USERS_FILTER = "UPDATE_USERS_FILTER";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_isFetching = "TOGGLE_isFetching";



const initialState = {
  users: [],
  usersFilter: "",
  pageSize: 18,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};
const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS_FILTER:
      state.usersFilter = action.searchTarget;
      return {...state};
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
      return { ...state, isFetching: action.isFetching }
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.e}
    default:
      return state;
  }

  // if (action.type === FOLLOW) {
  //   return {
  //     ...state,
  //     users: state.users.map(e => {
  //       if (e.id === action.userid) {
  //         return { ...e, follower: true };
  //       }
  //       return e;
  //     })
  //   }
  // }
  // if (action.type === UNFOLLOW) {
  //   return {
  //     ...state,
  //     users: state.users.map(e => {
  //       if (e.id === action.userid) {
  //         return { ...e, follower: false };
  //       }
  //       return e;
  //     })
  //   }
  // }
  // if (action.type === UPDATE_USERS_FILTER) {
  //   state.usersFilter = action.searchTarget
  //   return {...state}
  // }
  // if (action.type === SET_USERS) {
  //   return { ...state, users: [...state.users, ...action.users] };
  // }
  // return state;
};
export const userFilterActionCreater = (searchTarget) => {
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

export default friendReducer;
