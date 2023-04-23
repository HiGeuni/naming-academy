import React from "react";
import { Container, MenuItem } from "./style";

const Menu = ({ isBest, setIsBest }) => {
  return (
    <Container>
      <MenuItem activate={isBest} onClick={() => setIsBest(true)}>
        실시간 인기글
      </MenuItem>
      <MenuItem>|</MenuItem>
      <MenuItem activate={!isBest} onClick={() => setIsBest(false)}>
        최신글
      </MenuItem>
    </Container>
  );
};

export default Menu;
