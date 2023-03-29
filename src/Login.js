import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import tigerImage from './images/tiger2.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'tiger@gmail.com' && password === 'janne123') {
      navigate('/Header');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="container">
      <Modal.Dialog className="custom-modal">
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer className="footer-modal">
  <div className="button-container">
    <Button type="submit" variant="primary" onClick={handleSubmit}>
      Login
    </Button>
    <Button className="button-cancel" variant="secondary">
      Cancel
    </Button>
  </div>
</Modal.Footer>
      </Modal.Dialog>

      <div className="image-container">
        <img src={tigerImage} alt="Tiger" />
      </div>
    </div>
  );
};

export default Login;

