// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/api/auth/signup', { email, password });
      setMessage('Signed up successfully');
      console.log(response.data);
      // Handle successful signup (e.g., redirect to another page)
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      setMessage('Email already exists');
      // Handle signup error (e.g., display error message to user)
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
