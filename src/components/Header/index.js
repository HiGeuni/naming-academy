import React, { useState } from "react";
import { Container, Title, UserLogin, FlexFixedDiv } from "./style";

const Header = () => {
  const [loginState, setLoginState] = useState(false);

  const onClickLogin = () => {
    setLoginState(!loginState);
  };

  return (
    <Container>
      <FlexFixedDiv>
        <Title to="/">제목 학원</Title>
        <UserLogin onClick={onClickLogin}>
          {loginState ? "Log out" : "Log in"}
        </UserLogin>
      </FlexFixedDiv>
    </Container>
  );
};

export default Header;
