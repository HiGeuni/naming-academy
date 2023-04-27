import { useState } from "react";
import {
  SubmitBtn,
  LogInContainer,
  Container,
  WelcomeContainer,
  SignUpBtn,
  Error,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useInput } from "hooks/useInput";
import axios from "axios";

const LogInForm = () => {
  const id = useInput("");
  const password = useInput("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("/signup");
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      loginId: id.value,
      password: password.value,
    };
    const formData = new FormData();
    formData.append("loginId", id.value);
    formData.append("password", password.value);

    axios
      .post("/users/login", postData)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  return (
    <Container>
      <LogInContainer onSubmit={onHandleSubmit}>
        <div> Sign In </div>
        <div style={{ width: "66%", marginTop: "24px" }}>
          {isError && <Error>Invalid Id or Password</Error>}
        </div>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={id.value}
          onChange={(e) => id.onChangeValue(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password.value}
          onChange={(e) => password.onChangeValue(e)}
        />
        <SubmitBtn type="submit">LogIn!</SubmitBtn>
      </LogInContainer>
      <WelcomeContainer>
        <div> 제목 학원에 오신 걸 환영합니다! </div> <br />
        <div> made by Team 21 </div>
        <SignUpBtn onClick={onClickBtn}> 회원이 아니신가요? </SignUpBtn>
      </WelcomeContainer>
    </Container>
  );
};

export default LogInForm;
