import styled from "@emotion/styled";

export const FeedContainer = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  border-radius: 20px;
  background-color: #d9d9d9;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: -10px;
`;

export const BestComment = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #a48374;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #ebe2db;
  .best {
    color: #3a2d27;
  }
`;

export const Like = styled.div`
  display: flex;
  position: absolute;
  column-gap: 18px;
  align-items: center;
  padding-left: 10px;
  right: 20px;
  bottom: 115px;
  width: 100px;
  height: 61px;
  border-radius: 20px;
  background-color: #3a2d27;
  color: #f1ece6;
  font-size: 24px;
  font-weight: 700;
`;