import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 640px;
  font-size: 40px;
  font-weight: 700;
  background-color: #ebe2db;
  border-radius: 0px 20px 20px 0px;

  & > div > input {
    width: 370px;
    height: 20px;
    color: #3a2d27;
    font-size: 20px;
    border-radius: 15px;
    vertical-align: center;
    padding: 15px;
    margin-top: 20px;
    maxlength: 10;
    border: none;
    background-color: #f1ece6;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  }
  & > div > input:focus {
    outline: none;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 640px;
  font-size: 30px;
  font-weight: 700;
  color: #ebe2db;
  background-color: #3a2d27;
  border-radius: 20px 0px 0px 20px;
`;

export const SubmitBtn = styled.button`
  background: none;
  width: 400px;
  height: 50px;
  background-color: #3a2d27;
  color: #f1ece6;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`;

export const LogInBtn = styled.button`
  background: none;
  width: 250px;
  height: 60px;
  background-color: #ebe2db;
  color: #3a2d27;
  border: none;
  border-radius: 30px;
  margin-top: 60px;
  font-size: 25px;
  font-weight: 700;
`;

export const Error = styled.div`
  /* margin-top: 16px; */
  font-size: 16px;
  color: red;
`;

export const Label = styled.label`
  display: flex;
  column-gap: 20px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: -25px;
  margin-left: 10px;
  z-index: 10;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
