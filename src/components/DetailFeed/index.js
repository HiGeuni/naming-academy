import React from "react";
import {
  CommentsContainer,
  DetailContainer,
  ShadowWrapper,
  StyledImg,
  UserInfo,
} from "./style";
import Comments from "components/Comments";
import { HiUserCircle } from "react-icons/hi";

const DetailFeed = ({ id, data }) => {
  return (
    <DetailContainer>
      <ShadowWrapper>
        <StyledImg src={data.imgUrl} />
        <CommentsContainer>
          <UserInfo>
            <HiUserCircle /> {data.username}
          </UserInfo>
          <hr />
          <Comments />
        </CommentsContainer>
      </ShadowWrapper>
    </DetailContainer>
  );
};

export default DetailFeed;
