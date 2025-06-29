import axiosInstance from "../config/axiosInstance";


// create user in database
export const createUser = async (user) => {
  const res = await axiosInstance.post("/users", user);
  return res.data;
}

// get all the users
export const getUsers = async () => {
  const res = await axiosInstance.get('/users');
  return res.data;
}

// get user object of specific email
export const getUserByEmail = async (user_email) => {
  const res = await axiosInstance.get(`/users/user_email/${user_email}`);
  return res.data;
}



