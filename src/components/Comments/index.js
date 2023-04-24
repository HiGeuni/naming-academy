import React from "react";
import { CommentsWrapper } from "./style";
import Comment from "components/Comments/Comment";
import InputComment from "./InputComment";

const Comments = () => {
  return (
    <>
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
    </>
  );
};

export default Comments;
