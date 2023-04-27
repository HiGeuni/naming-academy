import React from "react";
import {
  CommentsContainer,
  DetailContainer,
  ShadowWrapper,
  StyledImg,
  UserInfo,
} from "./style";
import Comments from "components/Comments";
import Skeleton from "react-loading-skeleton"; // import Skeleton

import { HiUserCircle } from "react-icons/hi";

const DetailFeed = ({ data, comments, user, isLoggedIn }) => {
  const isLoading = !data;
  return (
    <DetailContainer>
      <ShadowWrapper>
        {isLoading ? (
          <Skeleton width={700} height={700} />
        ) : (
          <StyledImg src={data.imageUrl} />
        )}
        <CommentsContainer>
          <UserInfo>
            <HiUserCircle />
            {isLoading ? <Skeleton width={200} /> : data.uploader}
          </UserInfo>
          <hr />
          {comments && <Comments comments={comments} />}
        </CommentsContainer>
      </ShadowWrapper>
    </DetailContainer>
  );
};

export default DetailFeed;
