import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-icons">
        <a href="https://github.com/Charlie-Ward" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="footer-text">
        &copy;{new Date().getFullYear()} <a href='https://charlie-ward.info' target='_blank' rel='noopener noreferrer' className='link'>Charlie Ward</a> under the MIT license.
      </p>
    </footer>
  );
};

export default Footer;
