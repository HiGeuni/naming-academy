import React from "react";
import { FeedContainer, Image, BestComment, Like } from "./style";
import { AiTwotoneLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const HoemFeed = ({ data }) => {
  const navigate = useNavigate();
  const onClickDiv = () => {
    navigate(`/detail?id=${data.id}`, { state: { id: data.id, data: data } });
  };
  return (
    <FeedContainer onClick={onClickDiv}>
      <Image src={data.imgUrl} />
      <BestComment>
        <span style={{ marginLeft: "40px" }} className="best">
          BEST |{" "}
        </span>{" "}
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
