import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [Password, setPassword] = useState('Password');
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', { username, email, imageUrl });
      alert('Registration successful! You can now log in.');
      setUsername('');
      setEmail('');
      setImageUrl('');
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed.');
    }

  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
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
        <div className="mb-3">
          <label>Image URL</label>
          <input type="text" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    
  );
};

export default Register;