import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: 99999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  width: 800px;
  height: 600px;
  background-color: #f1ece6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
`;

export const StyledText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const StyledBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a48374;
  border-radius: 50px;
  color: #f1ece6;
  width: 400px;
  height: 80px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;
