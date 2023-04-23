import React, { useState } from "react";
import { AnonumousWrapper, InputArea, CustomChkBox } from "./style";

const InputComment = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <AnonumousWrapper>
        <CustomChkBox type="checkbox" />
        <div>익명</div>
      </AnonumousWrapper>
      <hr />
      <InputArea>
        <textarea
          type="text"
          value={inputValue}
          onChange={(e) => onChangeInput(e)}
          placeholder="Leave a Comment!"
          style={{ resize: "none" }}
        />
        <button type="submit">게시</button>
      </InputArea>
    </>
  );
};

export default InputComment;
