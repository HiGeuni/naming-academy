import { axiosInstance } from "api";
import axios from "axios";
import { useQuery } from "react-query";

export const fetchFeeds = async () => {
  return await axios.get("/posts/all");
};

export const fetchFeedById = async ({ id }) => {
  return await axios.get(`/posts/${id}`);
};

export const addFeed = async ({ data }) => {
  return await axios.post("/posts/upload", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
