import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../state';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('http://localhost:5000/api/auth/login', {
      email: email,
      password: pass
    })
    if (data) {
      dispatch(setUser({
        user: data.user,
        token: data.token
      }))
    }
    console.log(data);
    navigate('/profile')
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Email'
          name='email'
        />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='Password'
          name='password'
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default Login