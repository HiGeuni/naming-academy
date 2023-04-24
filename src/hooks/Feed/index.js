import { axiosInstance } from "api";
import { useQuery } from "react-query";

export const fetchFeeds = async () => {
  return await axiosInstance.request({
    method: "GET",
    url: "/data/feeds.json",
  });
};
