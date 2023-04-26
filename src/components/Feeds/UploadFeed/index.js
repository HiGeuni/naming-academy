import React, { useState } from "react";
import { FileUpload, SubmitBtn, UploadContainer, Input, Label } from "./style";
import { MdCloudUpload } from "react-icons/md";
import { addFeed } from "hooks/Feed";
import { useNavigate } from "react-router-dom";

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
    formData.append("image", selectedImage);
    addFeed({ data: formData })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((e) => console.error(e));
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
            style={{ width: "80%", height: "80%" }}
          />
        ) : (
          <>
            <MdCloudUpload style={{ width: "380px", height: "280px" }} />
            <div> Drag and Drop Image </div>
          </>
        )}

        <div>
          <Input
            type="file"
            id="file-input"
            onChange={(e) => {
              handleImageUpload(e);
            }}
          />
          <Label htmlFor="file-input">Choose File</Label>
        </div>
      </FileUpload>
      <SubmitBtn onClick={(e) => handleSubmit(e)}>upload</SubmitBtn>
    </UploadContainer>
  );
};

export default UploadFeed;
