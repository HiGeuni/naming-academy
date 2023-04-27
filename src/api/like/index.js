import { axiosInstance } from "api";

export const AddLike = async ({ postId, commentId }) => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: `/posts/${postId}/comments/${commentId}/likes`,
  });
  return data;
};

export const DelLike = async ({ postId, commentId }) => {
  const { data } = await axiosInstance.request({
    method: "DELETE",
    url: `/posts/${postId}/comments/${commentId}/likes`,
  });
  return data;
};
