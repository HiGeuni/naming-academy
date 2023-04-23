import React from "react";
import { FileUpload, SubmitBtn, UploadContainer, Input, Label } from "./style";
import { MdCloudUpload } from "react-icons/md";

const UploadFeed = () => {
  return (
    <UploadContainer>
      <FileUpload>
        <MdCloudUpload style={{ width: "380px", height: "280px" }} />
        <div> Drag and Drop Image </div>
        <div>
          <Input type="file" placeholder="Choose File" />
          <Label>Choose File</Label>
        </div>
      </FileUpload>
      <SubmitBtn>upload</SubmitBtn>
    </UploadContainer>
  );
};

export default UploadFeed;
