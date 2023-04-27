import { axiosInstance } from "api";
import DetailFeed from "components/DetailFeed";
import Layout from "components/Layout";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [fdata, setFdata] = useState("");
  const [comments, setComments] = useState("");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    axios.get(`/posts/${id}`).then((d) => {
      setFdata(d);
    });
    axios.get(`/comments/getComments/${id}`).then((e) => {
      setComments(e.data);
    });
  }, []);

  return (
    <Layout>
      <DetailFeed id={id} data={fdata.data} comments={comments} />
    </Layout>
  );
};

export default Detail;
