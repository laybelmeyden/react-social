const UPDATE_USERS_FILTER = "UPDATE_USERS_FILTER";
const initialState = {
  users: [],
  usersFilter: "",
};
const friendReducer = (state = initialState, action) => {
  const stateCopy = {...state};
  if (action.type === UPDATE_USERS_FILTER) {
    stateCopy.usersFilter = action.searchTarget;
  }
  return stateCopy;
};
export const UserFilterActionCreater = (searchTarget) => {
  return { type: UPDATE_USERS_FILTER, searchTarget: searchTarget };
};

export default friendReducer;
