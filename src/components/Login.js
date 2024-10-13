import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('Password');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jobportalbackend-c2xp.onrender.com/api/users/login', { email });
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('username', response.data.username);
       // Save user ID to local storage
      alert('Login successful!');
      window.location.reload(); // Reload the page to reflect changes
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="text" 
            className="form-control" 
            
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
