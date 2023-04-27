import React, { useState } from "react";
import { FileUpload, SubmitBtn, UploadContainer, Input, Label } from "./style";
import { MdCloudUpload } from "react-icons/md";
import { addFeed } from "hooks/Feed";
import { useNavigate } from "react-router-dom";
import { PostFeed } from "api/feed";

const UploadFeed = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setSelectedImageURL(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
      setSelectedImageURL(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedImage(file);
      setSelectedImageURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uploaderId", 1);
    if (!selectedImage) {
      alert("이미지를 입력하세요!");
      return;
    }
    formData.append("file", selectedImage);
    PostFeed({ body: formData })
      .then((res) => {})
      .catch((e) => {});
  };

  return (
    <UploadContainer>
      <FileUpload
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        isDragOver={isDragOver}
      >
        {selectedImage ? (
          <img
            alt="selectedImage"
            src={selectedImageURL}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <>
            <MdCloudUpload style={{ width: "380px", height: "280px" }} />
            <div> Drag and Drop Image </div>
          </>
        )}
      </FileUpload>
      <Input
        type="file"
        id="file-input"
        onChange={(e) => {
          handleImageUpload(e);
        }}
      />
      <Label htmlFor="file-input">Choose File</Label>
      <SubmitBtn onClick={(e) => handleSubmit(e)}>upload</SubmitBtn>
    </UploadContainer>
  );
};

export default UploadFeed;
