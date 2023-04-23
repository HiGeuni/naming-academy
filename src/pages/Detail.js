import DetailFeed from "components/DetailFeed";
import Layout from "components/Layout";
import React from "react";

const Detail = ({ id }) => {
  return (
    <Layout>
      <DetailFeed id={id} />
    </Layout>
  );
};

export default Detail;
