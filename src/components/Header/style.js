import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #cbac8e;
  z-index: 9999;
`;

export const FlexFixedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* 수정된 부분 */
  padding: 0 50px; /* 수정된 부분 */
`;

export const Title = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  margin-left: 0; /* 수정된 부분 */
  text-decoration: none;
  color: #3a2d27;
  :visited {
    text-decoration: none;
    background: none;
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: "center";
  font-size: 20px;
  font-weight: 700;
  margin-right: 0; /* 수정된 부분 */
  border: none;
  background: none;
`;
