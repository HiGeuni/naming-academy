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

const Comment = () => {
  const [numLike, setNumLike] = useState(0);
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
          <UserName>익명 1</UserName>
        </UserContainer>
        <Content>
          산타가 굴뚝 안의 트랩에 걸렸다.산타가 굴뚝 안의 트랩에 걸렸다.산타가
          굴뚝 안의 트랩에 걸렸다.산타가 굴뚝 안의 트랩에 걸렸다.
        </Content>
        {numLike !== 0 && <Like>좋아요 : {numLike}개 </Like>}
      </div>
      {isChkHeart ? (
        <AiFillHeart
          onClick={() => onClickHeart(false)}
          style={{ width: "40px", height: "40px" }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => onClickHeart(true)}
          style={{ width: "40px", height: "40px" }}
        />
      )}
    </CommentContainer>
  );
};

export default Comment;
