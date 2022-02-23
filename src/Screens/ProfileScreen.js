import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';

const ProfScreen = styled.div`
  height: 100vh;
  color: white;
`;
const ProfBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  max-width: 800px; 

  h1{
      font-size: 60px;
      font-weight: 400;
      border-bottom: 1px solid #282c2d;
      margin-bottom: 20px;
  }
`;
const ProfInfo = styled.div`
  display: flex;

  img{
      height: 100px;
  }
`;
const ProfDetails = styled.div`
  color: white;
  margin-left: 5px;
  flex: 1;

  h2{
      background-color: gray;
      padding: 15px;
      font-size: 15px;
  }
`;
const ProfPlans = styled.div`
  margin-top: 20px;
  h3{
      border-bottom: 1px solid #282c2d;
      padding-bottom: 10px;
  }
`;
const ProfSignOut = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 5%;
  width: 100%;
  color: #fff;
  background-color: #e50914;
  border: none;
  cursor: pointer;
`;

function ProfileScreen() {

    const user = useSelector(selectUser);

  return (
    <ProfScreen>
        <Nav/>
        <ProfBody>
            <h1>Edit Profile</h1>
            <ProfInfo>
                <img alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7q6Xxz10aPOmWfZPZMZGaXMpAV2MVFjTM0zZrCdBadCQIvfN_o597iR2LeDRZubFAxY&usqp=CAU' />
                <ProfDetails>
                    <h2>{user.email}</h2>
                    <ProfPlans>
                        <h3>Plans</h3>
                        <ProfSignOut onClick={() => auth.signOut() }>Sign Out</ProfSignOut>
                    </ProfPlans>
                </ProfDetails>
            </ProfInfo>
        </ProfBody>
    </ProfScreen>
  )
}

export default ProfileScreen