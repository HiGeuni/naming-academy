import DetailFeed from "components/DetailFeed";
import Layout from "components/Layout";
import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { id, data } = location.state;

  return (
    <Layout>
      <DetailFeed id={id} data={data} />
    </Layout>
  );
};

export default Detail;
