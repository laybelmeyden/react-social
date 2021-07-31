const UPDATE_USERS_FILTER = "UPDATE_USERS_FILTER";
const initialState = {
  users: [],
  usersFilter: "",
};
const friendReducer = (state = initialState, action) => {
  if (action.type === UPDATE_USERS_FILTER) {
    state.usersFilter = action.searchTarget;
  }
  return state;
};
export const UserFilterActionCreater = (searchTarget) => {
  return { type: UPDATE_USERS_FILTER, searchTarget: searchTarget };
};

export default friendReducer;
