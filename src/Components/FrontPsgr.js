import React from 'react';
import { Link } from 'react-router-dom';
import './frontpage.css'

const FrontPsgr = () => {
  return (
    <div className='front'>
      <div className='header'>
        <h1>Anime World</h1>
      </div>
      <div className='content'>

        </div>
        
        <div>
      
          <Link to='/'  className='home-button-container'>
            <button>Home</button>
              </Link>
        
      </div>
    </div>
  );
};

export default FrontPsgr;