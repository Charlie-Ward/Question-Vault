import {React, useEffect} from 'react';
import './error-page.css';

const ErrorPage = ({ error }) => {

  useEffect(() => {
    document.title = "QV - Error";
  }, []);

  return (
    <div className="error-page">
      <h2 className="error-page-title">Error</h2>
      <p className="error-page-text">
        Oops! Something went wrong. Please try again later.
      </p>
      <p className='error-page-text'>
        <a href='/'>Go back home</a>
      </p>
      {error && (
        <p className="error-page-message">
          Error Details: {error.message}
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
