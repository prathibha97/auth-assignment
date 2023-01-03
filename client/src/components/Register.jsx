import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

 const Register = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(pass === confirmpassword){
      await axios.post('http://localhost:5000/api/auth/register',{
        email: email,
        fullName: name,
        username: username,
        password: pass,
        confirmPassword: confirmpassword
      })
    }
  navigate('/login')
  };

  return (
    <div className='auth-form-container'>

      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>

        <input
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
          name='email'
        />

        <input
          value={username}
          name='username'
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='Password'
          name='password'
        />
        <input
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          type='password'
          placeholder='Confirm Password'
          name='confirmpassword'
        />
        <button type='submit'>Register</button>
      </form>
     
      </div>

  );
};

export default Register