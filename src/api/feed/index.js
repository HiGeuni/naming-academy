import { axiosInstance } from "api";

export const PostFeed = async ({ body }) => {
  const { data } = await axiosInstance.request({
    method: "POST",
    url: "/posts",
    data: body,
  });
  return data;
};

export const GetAllFeedsSortByDate = async () => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: "/posts/newest",
  });
  return data;
};

export const GetAllFeedsSortByLike = async () => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: "/posts/popularity",
  });
  return data;
};

export const GetFeedById = async ({ postId }) => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: `/posts/${postId}`,
  });
  return data;
};

export const DelFeedById = async ({ postId }) => {
  const { data } = await axiosInstance.request({
    method: "DELETE",
    url: `/posts/${postId}`,
  });
  return data;
};
