import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <span className="navbar-text">Question Vault</span>
      </div>
      <div className="navbar-right">
        <button className="navbar-link"><a href='/' className='HomeLink'>Home</a></button>
        <div className="navbar-dropdown">
          <button className="navbar-dropdown-toggle">Subjects</button>
          <div className="navbar-dropdown-content">
            <a href="/geography">Geography</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
