import React, { useState } from 'react';
import Axios from 'axios';

const Login= ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here
    try {
      const response = await Axios.post('http://localhost:5000/login', {
        username,
        password
      });
      if (response.data === 'Login Attempt was successful.') {
        setAuthenticated(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle errors (e.g., show error message)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;
