import React, { useEffect, useRef, useState } from "react";
import { Container, Title, StyledBtn, FlexFixedDiv } from "./style";
import { useNavigate } from "react-router-dom";
import Dropdown from "components/Dropdown";
import ProfileChangeModal from "components/User/ProfileChangeModal";
import { useAuth } from "hooks/useAuth";

const Header = () => {
  const { user, isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = () => {
    if (isLoggedIn) {
      alert("logout!");
      // call logout api or erase session id
      // setIsLogin(false);
    } else {
      navigate("/login");
    }
  };

  const onClickBtn = () => {
    if (isLoggedIn) {
      // setShowModal(true);
    } else {
      navigate("/signup");
    }
  };

  return (
    <Container>
      {showModal && <ProfileChangeModal setIsShow={setShowModal} />}
      <FlexFixedDiv>
        <Title to="/">제목 학원</Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledBtn onClick={onClickLogin}>
            {isLoggedIn ? "Log out" : "Log in"}
            {/* log out 대신 닉네임 보여주기 */}
          </StyledBtn>
          <StyledBtn onClick={onClickBtn}>
            {isLoggedIn ? (
              <>
                <Dropdown setShowModal={setShowModal} />
              </>
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
