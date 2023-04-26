import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding-top: 80px;
  /* margin-bottom: 40px; */
  width: 100%;
  background-color: #f1ece6;
  z-index: 9998;
`;

export const FlexDiv = styled.div`
  display: flex;
  width: 1200px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.button`
  float: right;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => (props.activate ? "#A48374" : "#D1C7BD")};
  border: none;
  background: none;
`;
export const NewFeedBtn = styled.button`
  position: relative;
  margin-top: -40px;
  font-size: 24px;
  font-weight: 700;
  float: right;
  background: none;
  border: none;
  color: #3a2d27;
`;
