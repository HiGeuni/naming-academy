import { axiosInstance } from "api";

export const AddComment = async ({ postId, body }) => {
  const { data } = axiosInstance.request({
    method: "POST",
    url: `/posts/${postId}/comments`,
    body: body,
  });
  return data;
};

export const DelComemnt = async ({ postId, commentId }) => {
  const { data } = axiosInstance.request({
    method: "DELETE",
    url: `/posts/${postId}/comments/${commentId}`,
  });
  return data;
};
