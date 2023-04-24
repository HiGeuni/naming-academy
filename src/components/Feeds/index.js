import React from "react";
import { FeedsContainer } from "./style";
import HomeFeed from "./HomeFeed";
import { useNavigate } from "react-router-dom";

const Feeds = ({ data }) => {
  const navigate = useNavigate();

  const onClickFeed = (id) => navigate(`/detail?id=${id}`);

  return (
    <FeedsContainer>
      {data &&
        data.map((feed) => (
          <HomeFeed key={feed.id} onClick={onClickFeed} data={feed} />
        ))}
    </FeedsContainer>
  );
};

export default Feeds;
