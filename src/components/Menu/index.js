import React from "react";
import { Container, MenuItem, FlexDiv, NewFeedBtn } from "./style";
import { useNavigate } from "react-router-dom";

const Menu = ({ isBest, setIsBest }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate("/upload");
  };
  return (
    <Container>
      <FlexDiv>
        <MenuItem activate={isBest} onClick={() => setIsBest(true)}>
          실시간 인기글
        </MenuItem>
        <MenuItem>|</MenuItem>
        <MenuItem activate={!isBest} onClick={() => setIsBest(false)}>
          최신글
        </MenuItem>
      </FlexDiv>
      <div style={{ width: "800px" }}>
        <NewFeedBtn onClick={onClickBtn}>+ new feed</NewFeedBtn>
      </div>
    </Container>
  );
};

export default Menu;
