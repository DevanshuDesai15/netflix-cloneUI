import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpScreen from './SignUpScreen';

const MainScreen = styled.div`
  position: relative;
  height: 100%;
  background: url("https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg") center no-repeat;
  background-size: cover;
`;
const LoginBackground = styled.div`

`;
const Logoimg = styled.img`
  position: fixed;
  left:0;
  width: 150px;
  object-fit: contain;
  padding-left: 20px;
  padding-top: 20px;
`;
const SignBtn = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  cursor: pointer;
  border: none;
  font-weight: 600;
`;
const LoginScreenGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  background-image: linear-gradient(
      to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%  
  );
`;
const LoginBody = styled.div`
  position: absolute;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1;
  color: #fff;
  left:0;
  right:0;

  h1{
      font-size: 3.125rem;
      margin-bottom: 20px;
  }
  h2{
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 30px;
  }
  h3{
      font-size: 1.3rem;
      font-weight: 400;
  }
`;
const LoginInput = styled.div`
  margin: 20px;
  form{
      input{
        padding: 10px;
        outline-width: 0;
        height: 30px;
        width: 30%;
        border: none;
        max-width: 600px;
      }
  }
`;
const GetStartedBtn = styled.button`
  padding: 16px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

function LoginScreen() {

    const [signIn, setsignIn] = useState(false);

  return (
    <MainScreen>
        <LoginBackground>
            <Logoimg src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Logo' />
            <SignBtn onClick={()=> setsignIn(true)}>Sign In</SignBtn>
            <LoginScreenGradient />
        </LoginBackground>
        <LoginBody>
            {signIn ? (
                <SignUpScreen />
            ):(
                <>
                <h1>Unlimited films, TV programmes and more...</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <LoginInput>
                    <form>
                        <input type='email' placeholder='Email address' />
                        <GetStartedBtn onClick={()=>setsignIn(true)}>GET STARTED</GetStartedBtn>
                    </form>
                </LoginInput>
            </>
            )}
        </LoginBody>
    </MainScreen>
  )
}

export default LoginScreen