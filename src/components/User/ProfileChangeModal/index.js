import React, { useEffect, useRef } from "react";
import { Container, ModalContainer, StyledText, StyledBtn } from "./style";
import { FaUser } from "react-icons/fa";
import { Input } from "components/Feeds/UploadFeed/style";

const ProfileChangeModal = ({ isShow, setIsShow }) => {
  const modalRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ModalContainer onMouseDown={handleMouseDown}>
      <Container ref={modalRef}>
        <StyledText>프로필 수정</StyledText>
        <FaUser style={{ width: "200px", height: "200px" }} />
        <Input type="file" id="change_profile" />
        <StyledBtn htmlFor="change_profile" type="file">
          upload
        </StyledBtn>
      </Container>
    </ModalContainer>
  );
};

export default ProfileChangeModal;
