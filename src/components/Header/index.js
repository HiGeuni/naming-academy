import React, { useState } from "react";
import { Container, Title, UserLogin } from "./style";

const Header = () => {
  const [loginState, setLoginState] = useState(false);

  const onClickLogin = () => {
    setLoginState(!loginState);
  };

  return (
    <Container>
      <Title>제목 학원</Title>
      <UserLogin onClick={onClickLogin}>
        {loginState ? "Log out" : "Log in"}
      </UserLogin>
    </Container>
  );
};

export default Header;
