import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "135f104a-84d5-4cc8-928b-a32cd3dbfce4",
  },
});

export const getUsers = (currentPage, pageSize) => {
  return instance.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
  );
};
export const getPages = (e, pageSize) => {
  return instance.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${pageSize}`
  );
};

export const getFollow = (id) => {
  return instance.post(
    `https://social-network.samuraijs.com/api/1.0/follow/${id}`
  );
};
export const getUnfollow = (id) => {
  return instance.delete(
    `https://social-network.samuraijs.com/api/1.0/follow/${id}`
  );
};
export const getCurrentUser = () =>{
  return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
}
export const getCurrentProfile = () =>{
  return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
}
export const getCurrentProfileId = (userId, id) =>{
  return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || id}`)
}

