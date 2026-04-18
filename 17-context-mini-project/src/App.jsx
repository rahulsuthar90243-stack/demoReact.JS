import React from 'react'
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider';
import { Profile } from './components/Profile';

export const App = () => {
  return (
    <UserContextProvider>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App;