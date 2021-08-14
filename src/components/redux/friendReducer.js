const UPDATE_USERS_FILTER = "UPDATE_USERS_FILTER";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const initialState = {
  users: [],
  usersFilter: "",
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
              return { ...e, follower: true };
            }
          return e;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userid) {
            return { ...e, follower: false };
          }
          return e;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
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

export default friendReducer;
