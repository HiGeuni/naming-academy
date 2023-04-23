import styled from "@emotion/styled";

export const CommentsContainer = styled.div`
  width: 460px;
  height: 660px;
  background-color: #ebe2db;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: start;
  font-size: 30px;
  font-weight: 700;
  color: #3a2d27;
`;

export const CommentsWrapper = styled.div`
  height: 520px;
  overflow-y: scroll;
`;
