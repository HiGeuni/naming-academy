import { axiosInstance } from "api";
import axios from "axios";

export const Signup = async ({ body }) => {
  // const { data } = await axios.post("/users/signup", body);
  const { data } = await axiosInstance.request({
    method: "POST",
    body: body,
    url: "/users/signup",
  });
  return data;
};

// json
export const Login = async ({ body }) => {
  const { data } = await axiosInstance.request({
    method: "POST",
    body: body,
    url: "/users/login",
  });
  return data;
};

export const Logout = async () => {
  const { data } = await axiosInstance.request({
    method: "POST",
    url: "users/logout",
  });
  return data;
};

// form data - key : file
export const ChangeProfileImage = async ({ body }) => {
  const { data } = axiosInstance.request({
    method: "POST",
    body: body,
    url: "/users/image",
  });
  return data;
};
