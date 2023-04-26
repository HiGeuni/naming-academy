import React from "react";
import { CommentsWrapper } from "./style";
import Comment from "components/Comments/Comment";
import InputComment from "./InputComment";

const Comments = ({ comments }) => {
  return (
    <>
      <CommentsWrapper>
        {comments?.map((comment) => (
          <Comment data={comment} />
        ))}
      </CommentsWrapper>
      <InputComment />
    </>
  );
};

export default Comments;
