import React, { useState } from "react";
import {
  CommentContainer,
  UserName,
  Content,
  Like,
  UserContainer,
  WidthSizedDiv,
} from "./style";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";

const Comment = ({ data }) => {
  const [numLike, setNumLike] = useState(data.numLike);
  const [isChkHeart, setIsChkHeart] = useState(false);

  const onClickHeart = (flag) => {
    setIsChkHeart(flag);
    setNumLike(flag ? numLike + 1 : numLike - 1);
  };

  return (
    <CommentContainer>
      <WidthSizedDiv>
        <UserContainer>
          <div style={{ display: "flex" }}>
            <HiUserCircle style={{ width: "20px", height: "20px" }} />
            <UserName>{data.commenter}</UserName>
          </div>
          {isChkHeart ? (
            <AiFillHeart
              onClick={() => onClickHeart(false)}
              style={{ width: "25px", height: "25px" }}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => onClickHeart(true)}
              style={{ width: "25px", height: "25px" }}
            />
          )}
        </UserContainer>
        <Content>{data.comment}</Content>
        {numLike !== 0 && <Like>좋아요 : {numLike}개 </Like>}
      </WidthSizedDiv>
    </CommentContainer>
  );
};

export default Comment;
