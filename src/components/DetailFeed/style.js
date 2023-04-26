import styled from "@emotion/styled";

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;
`;

export const ShadowWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
`;

export const StyledImg = styled.img`
  width: 700px;
  height: 700px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

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
