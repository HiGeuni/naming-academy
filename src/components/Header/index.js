import React, { useEffect, useState } from "react";
import { Container, Title, StyledBtn, FlexFixedDiv } from "./style";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import ProfileChangeModal from "components/User/ProfileChangeModal";

const Header = () => {
  const [loginState, setLoginState] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = () => {
    if (loginState) {
      alert("logout!");
      setLoginState(false);
    } else {
      navigate("/login");
    }
  };

  const onClickBtn = () => {
    if (loginState) {
      setShowModal(true);
    } else {
      navigate("/signup");
    }
  };

  useEffect(() => {
    // LocalStorage를 확인해서 로그인 중인지 확인한다.
    // setLoginState(true)
  }, []);

  return (
    <Container>
      {showModal && <ProfileChangeModal setIsShow={setShowModal} />}
      <FlexFixedDiv>
        <Title to="/">제목 학원</Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledBtn onClick={onClickLogin}>
            {loginState ? "Log out" : "Log in"}
          </StyledBtn>
          <StyledBtn onClick={onClickBtn}>
            {loginState ? (
              <HiUserCircle style={{ width: "50px", height: "50px" }} />
            ) : (
              "Sign up"
            )}
          </StyledBtn>
        </div>
      </FlexFixedDiv>
    </Container>
  );
};

export default Header;
