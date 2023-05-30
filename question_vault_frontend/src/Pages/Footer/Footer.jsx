import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    handleFooterPosition();
    window.addEventListener('resize', handleFooterPosition);
    return () => {
      window.removeEventListener('resize', handleFooterPosition);
    };
  }, []);

  const handleFooterPosition = () => {
    if (footerRef.current) {
      const { clientHeight, scrollHeight } = document.documentElement;
      const footerHeight = footerRef.current.clientHeight;
      const isContentLonger = scrollHeight > clientHeight;
      footerRef.current.style.position = isContentLonger ? 'static' : 'fixed';
      footerRef.current.style.bottom = isContentLonger ? 'auto' : '0';
    }
  };

  return (
    <footer ref={footerRef} className='footer'>
      <div className="footer-icons">
        <a href="https://github.com/Charlie-Ward" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} <a href='https://charlie-ward.info' target='_blank' rel='noopener noreferrer'>Charlie Ward</a> under the MIT license.
      </p>
    </footer>
  );
};

export default Footer;
