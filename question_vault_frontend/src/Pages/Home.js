import {React, useEffect} from 'react';
import './Home.css';

const HomePage = () => {

  useEffect(() => {
    document.title = "Question Vault";
  }, []);

  return (
    <div className='home-page'>
      <h1>Welcome to My Website</h1>
      <p>This is the homepage content.</p>
    </div>
  );
};

export default HomePage;
