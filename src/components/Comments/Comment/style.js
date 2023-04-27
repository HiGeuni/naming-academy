import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px 20px 0px;
`;

export const WidthSizedDiv = styled.div`
  min-width: "100%";
`;

export const UserContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: "20px";
`;

export const UserName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #a48374;
`;

export const Content = styled.div`
  max-width: 400px;
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0 0 20px;
  word-wrap: break-word;
  color: #3a2d27;
`;

export const Like = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-left: 20px;
  color: #cbac8d;
`;
