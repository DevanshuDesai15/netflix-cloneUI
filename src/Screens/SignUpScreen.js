import React, { useRef } from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const SignUpscren = styled.div`
  max-width: 300px;
  padding: 70px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.85);

  form{
      display: grid;
      flex-direction: column;

      h1{
        text-align: left;
        margin-bottom: 25px;
      }

      h4{
        text-align: left;
        margin-top: 30px;

      }

      input{
        outline-width: 0;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 5px;
        border: none;
        padding: 5px 15px;
      }

      button{
        padding: 16px 20px;
        color: #fff;
        background-color: #e50914;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
        border-radius: 5px;
      }
  }
`;

const Gray = styled.span`
  color: gray;
`;
const Now = styled.span`
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(error => {
      alert(error.message);
    });
  } 

  return (
    <SignUpscren>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email' />
            <input ref={passwordRef} placeholder='Password' type='password' />
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
              <Gray>New to Netflix? </Gray>
              <Now onClick={register}>Sign Up Now. </Now> 
            </h4>
        </form>
    </SignUpscren>
  )
}

export default SignUpScreen