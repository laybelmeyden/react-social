import { getCurrentUser } from "../../api/api";

const TOGGLE_isFetching = "TOGGLE_isFetching";
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    case TOGGLE_isFetching:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, data: { userId, email, login } };
};
export const setisFetching = (isFetching) => {
  return { type: TOGGLE_isFetching, isFetching };
};

export const currentUserThunk = () => {
  return (dispatch) => {
    getCurrentUser().then((res) => {
      if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        dispatch(setUserData(id, login, email));
      }
    });
  };
};

export default authReducer;
