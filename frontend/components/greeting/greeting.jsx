import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, login, openModal }) => {
  
  const demoLogin = () => {
    const demoUser = { email: 'demo@user.com', password: '123456'}
    login(demoUser)
  }

  const sessionLinks = () => (
    <div className="login-signup">
      <div className='demo-login' onClick={demoLogin}>
        <div>Demo Login</div>
      </div>
      <div className='dropdown'>
        <div className='dropbtn'>
        <i className="fas fa-bars"></i>&nbsp;
        <i className="glyphicon glyphicon-user"></i>
        </div>
        <div className='dropdown-content'>
          <div onClick={() => openModal('login')}>Login</div>
          <div onClick={() => openModal('signup')}>Signup</div>
        </div>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Hi, {currentUser.fname} {currentUser.lname}!</h2>
      <button className="btn" onClick={logout}>Log Out</button>
      <Link className='btn' to={`/bookings/${currentUser.id}`}>Trips</Link>
    </div>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

// import React from 'react';




// class Greeting extends React.Component{
//   constructor(props){
//     super(props)
//   }
  
//   demoLogin = () => {
//     const demoUser = { email: 'demo@user.com', password: '123456'}
//     login(demoUser)
//   }

//   sessionLinks = () => (
//     <div className="login-signup">
//       <button className='btn' onClick={demoLogin}>Demo Login</button>
//       &nbsp; &nbsp;
//       <div className='dropdown'>
//         <div className='dd'>Hello</div>
//           <div className='dropdown-content' onClick={() => openModal('login')}>Login</div>
//           <div className='dropdown-content' onClick={() => openModal('signup')}>Signup</div>
//       </div>
//     </div>
//   );

//   personalGreeting = () => (
//     <div className="header-group">
//       <h2 className="header-name">Hi, {currentUser.fname} {currentUser.lname}!</h2>
//       <button className="btn" onClick={logout}>Log Out</button>
//       <button className='btn' onClick={}>Trips</button>
//     </div>
//   );

//   render(){
//     return{
//       return {currentUser ? this.personalGreeting() : this.sessionLinks()};
//     }
//   }
// };


// export default Greeting;

