import axios from "axios";

export const addComment = async ({ data }) => {
  console.log(data);
  return await axios.post("/comments", data);
};
