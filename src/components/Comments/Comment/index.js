import React, { useState } from "react";
import {
  CommentContainer,
  UserName,
  Content,
  Like,
  UserContainer,
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
      <div>
        <UserContainer>
          <HiUserCircle style={{ width: "20px", height: "20px" }} />
          <UserName>{data.commenter}</UserName>
        </UserContainer>
        <Content>{data.comment}</Content>
        {numLike !== 0 && <Like>좋아요 : {numLike}개 </Like>}
      </div>
      {isChkHeart ? (
        <AiFillHeart
          onClick={() => onClickHeart(false)}
          style={{ maxWidth: "50px", maxHeight: "50px" }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => onClickHeart(true)}
          style={{ maxWidth: "50px", maxHeight: "50px" }}
        />
      )}
    </CommentContainer>
  );
};

export default Comment;
