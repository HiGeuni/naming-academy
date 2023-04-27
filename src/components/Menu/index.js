import React from "react";
import { Container, MenuItem, FlexDiv, NewFeedBtn } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const Menu = ({ isBest, setIsBest }) => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const onClickBtn = () => {
    if (isLoggedIn) {
      navigate("/upload");
    } else {
      alert("Please Login!");
      navigate("/login");
    }
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
