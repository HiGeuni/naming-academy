import React from "react";
import { CommentsContainer, UserInfo, CommentsWrapper } from "./style";
import Comment from "components/Comments/Comment";
import InputComment from "./InputComment";
import { HiUserCircle } from "react-icons/hi";

const Comments = () => {
  return (
    <CommentsContainer>
      <UserInfo>
        <HiUserCircle /> User
      </UserInfo>
      <hr />
      <CommentsWrapper>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentsWrapper>
      <InputComment />
    </CommentsContainer>
  );
};

export default Comments;
