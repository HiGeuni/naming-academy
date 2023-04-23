import React from "react";
import { FeedsContainer } from "./style";
import HomeFeed from "./HomeFeed";

const Feeds = ({ data }) => {
  return (
    <FeedsContainer>
      <HomeFeed />
      <HomeFeed />
      <HomeFeed />
      <HomeFeed />
      <HomeFeed />
      <HomeFeed />
    </FeedsContainer>
  );
};

export default Feeds;
