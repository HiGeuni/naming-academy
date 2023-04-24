import { SubmitBtn, LogInContainer, Container, WelcomeContainer, SignUpBtn} from "./style";

const LogInForm = () => {
  return (
    <Container>
      <LogInContainer>
        <div> Sign In </div>
        <input type="text" name="id" placeholder="Id"/>
        <input type="password" name="password" placeholder="Password"/>
        <SubmitBtn>LogIn!</SubmitBtn>
      </LogInContainer>
      <WelcomeContainer>
        <div> 제목 학원에 오신 걸 환영합니다! </div> <br/>
        <div> made by Team 21 </div>
        <SignUpBtn> 회원이 아니신가요? </SignUpBtn>
      </WelcomeContainer>
    </Container>
  );
};

export default LogInForm;
