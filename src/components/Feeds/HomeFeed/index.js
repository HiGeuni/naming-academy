import React from "react";
import {
  FeedContainer,
  Image,
  BestComment,
  Like,
  SkeletonImage,
  SkeletonText,
} from "./style";
import { AiTwotoneLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HomeFeedSkeleton = () => {
  return (
    <FeedContainer>
      <SkeletonImage />
      <BestComment>
        <SkeletonText width="70%" height="30px" />
      </BestComment>
      <Like>
        <AiTwotoneLike style={{ width: "31px", height: "31px" }} />
        <SkeletonText width="40%" height="30px" />
      </Like>
    </FeedContainer>
  );
};

const HoemFeed = ({ data }) => {
  const isLoading = !data;
  const navigate = useNavigate();
  const onClickDiv = () => {
    navigate(`/detail?id=${data.postId}`, {
      state: { data: data },
    });
  };
  if (isLoading) return <HomeFeedSkeleton />;
  return (
    <FeedContainer onClick={onClickDiv}>
      <Image src={data.imageUrl} />
      <BestComment>
        <span style={{ marginLeft: "40px" }} className="best">
          BEST |
        </span>
        {data.bestComment}
      </BestComment>
      <Like>
        <AiTwotoneLike style={{ width: "31px", height: "31px" }} />
        {data.numLike}
      </Like>
    </FeedContainer>
  );
};

export default HoemFeed;
