import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  margin-bottom: 40px;
  width: 100%;
  height: 120px;
  background-color: #f1ece6;
  z-index: 9998;
`;

export const MenuItem = styled.button`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => (props.activate ? "#A48374" : "#D1C7BD")};
  border: none;
  background: none;
`;
