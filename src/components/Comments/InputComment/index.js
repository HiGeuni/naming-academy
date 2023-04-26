import React, { useState } from "react";
import { AnonumousWrapper, InputArea, CustomChkBox } from "./style";
import { addComment } from "hooks/Comment";
import { useNavigate } from "react-router-dom";

const InputComment = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      postId: 1,
      commenterId: 1,
      comment: inputValue,
      isAnonymous: isAnonymous,
    };
    addComment({ data: data })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.error(e));
  };
  return (
    <>
      <AnonumousWrapper>
        <CustomChkBox type="checkbox" />
        <div>익명</div>
      </AnonumousWrapper>
      <hr />
      <InputArea onSubmit={(e) => onHandleSubmit(e)}>
        <textarea
          type="text"
          value={inputValue}
          onChange={(e) => onChangeInput(e)}
          placeholder="Leave a Comment!"
          style={{ resize: "none" }}
        />
        <button style={{ cursor: "pointer" }} type="submit">
          게시
        </button>
      </InputArea>
    </>
  );
};

export default InputComment;
