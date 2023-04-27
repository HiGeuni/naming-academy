import React, { useEffect, useRef, useState } from "react";
import { Container, ModalContainer, StyledText, StyledBtn } from "./style";
import { FaUser } from "react-icons/fa";
import { Input } from "components/Feeds/UploadFeed/style";

const ProfileChangeModal = ({ isShow, setIsShow }) => {
  const modalRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    } else {
      setImageFile(null);
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
        {imageFile ? (
          <img
            src={URL.createObjectURL(imageFile)}
            style={{ width: "200px", height: "200px", borderRadius: "100px" }}
            alt="imgFile"
          />
        ) : (
          <FaUser style={{ width: "200px", height: "200px" }} />
        )}

        <Input
          type="file"
          id="change_profile"
          onChange={(e) => {
            handleImageUpload(e);
          }}
        />
        <StyledBtn htmlFor="change_profile" type="file">
          Choose File
        </StyledBtn>
        {/*  */}
        <StyledBtn type="submit">Submit</StyledBtn>
      </Container>
    </ModalContainer>
  );
};

export default ProfileChangeModal;
