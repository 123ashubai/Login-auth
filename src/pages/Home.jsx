import React from 'react';
import "../css/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Hello, Welcome to my page</h1>
        <p>Please login/signup to continue</p>
        <div className='links'>
          <Link to={'/signup'}>
            <button className='signupButton text-black px-3'>Signup</button>
          </Link>
          <Link to={'/signin'}>
            <button className='loginButton text-black px-3'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home