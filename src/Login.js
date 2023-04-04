import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import tigerImage from './images/tiger2.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'tiger@gmail.com' && password === 'janne123') {
      navigate('/Header');
    } else {
      alert('Felaktigt användarnamn eller lösenord');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          
            <img src={tigerImage}
            alt="A tiger in an astronaut costume with a planet in the background"
            width="322"
            height="511"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Adress:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="button">
        <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
