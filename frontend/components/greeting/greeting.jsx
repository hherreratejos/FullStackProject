import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Hi, {currentUser.fname} {currentUser.lname}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
