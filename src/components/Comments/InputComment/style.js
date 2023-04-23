import styled from "@emotion/styled";

export const AnonumousWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #cbac8d;
  & > input {
    border: none;
    background-color: #f1ece6;
  }
`;

export const CustomChkBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s;
  :checked {
    border: 6px solid #3a2d27;
  }
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  & > textarea,
  button {
    font-size: 20px;
    font-weight: 700;
    background: none;
    border: none;
  }
  & > textarea {
    width: 400px;
    height: 60px;
    color: #3a2d27;
  }
  & > button {
    color: #a48374;
  }
  & > textarea:focus {
    outline: none;
  }
`;
