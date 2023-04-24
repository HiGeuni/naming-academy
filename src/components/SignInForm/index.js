import { SubmitBtn, SignUpContainer, Container, WelcomeContainer, LogInBtn} from "./style";

const SignUpForm = () => {
  return (
    <Container>
      <WelcomeContainer>
        <div> 제목 학원에 오신 걸 환영합니다! </div> <br/>
        <div> made by Team 21 </div>
        <LogInBtn> 이미 회원이신가요? </LogInBtn>
      </WelcomeContainer>
      <SignUpContainer>
        <div> Sign Up </div>
        <input type="text" name="id" placeholder="Id"/>
        <input type="text" name="nickname" placeholder="Nickname"/>
        <input type="password" name="password" placeholder="password"/>
        <input type="password" name="password" placeholder="Password"/>
        <SubmitBtn>Join</SubmitBtn>
      </SignUpContainer>
    </Container>


  );
};

export default SignUpForm;
