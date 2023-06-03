import React from 'react';
import './header.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../images/LOGO.png";


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src= {logo} alt="Edyoda Logo" className="logo" />
        <div className="dropdown-container">
          <select className="dropdown">
            <option value="courses">Courses</option>
          </select>
          <select className='dropdown'>
            <option value="programs">Programs</option>
          </select>
        </div>
      </div>
      <div className="actions-container">
        <div className="search-icon">
          <i className="fa fa-search"></i>
        </div>
        <button className="login-button">Login</button>
        <button className="join-now-button">Join Now</button>
      </div>
    </header>
  );
};

export default Header;
