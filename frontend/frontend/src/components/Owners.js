import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Owners = () => {
  const [view, setView] = useState('list');

  const renderContent = () => {
    switch (view) {
      case 'login':
        return (
          <div>
            <h2>Login</h2>
            <form>
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <button type="submit">Login</button>
            </form>
            <p>New user? <Link to="/register">Register here</Link></p>
          </div>
        );
      case 'register':
        return (
          <div>
            <h2>Register</h2>
            <form>
              <label>Name:</label>
              <input type="text" required />
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        );
      default:
        return (
          <div>
            <h1>Owners</h1>
            <p>List of owners goes here...</p>
            <button onClick={() => setView('login')}>Login</button>
            <button onClick={() => setView('register')}>Register</button>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
};

export default Owners;
