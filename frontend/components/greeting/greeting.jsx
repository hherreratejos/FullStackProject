import React from 'react';
// import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, login, openModal }) => {
  
  const demoLogin = () => {
    const demoUser = { email: 'demo@user.com', password: '123456'}
    login(demoUser)
  }

  const sessionLinks = () => (
    <div className="login-signup">
      <button onClick={demoLogin}>Demo Login</button>
      &nbsp; &nbsp;
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp; &nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
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
