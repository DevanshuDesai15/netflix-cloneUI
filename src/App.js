import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // LOGED IN
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
        }))
      }else{
        //LOGED OUT
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch]);
  

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
        <Routes>
          <Route path='/profile' element={<ProfileScreen/>}/>
          <Route exact path='/' element={<HomeScreen/>} />
        </Routes>
          
        )}
      </Router>
    </div>
  );
}

export default App;
