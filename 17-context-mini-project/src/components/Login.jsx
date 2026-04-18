import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleBtn=(e)=>{
     e.preventDefault();
     setUser({username, password});
    }

  return (
    <div>
        <input 
        type="text"
        placeholder='Enter username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        />

        <input 
        type="text"
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />

        <button onClick={handleBtn}>Submit</button>
    </div>
  )
}

export default Login;