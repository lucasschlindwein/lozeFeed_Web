import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo.svg';
import upload from '../assets/upload.svg';

function Header() {
  return (
    <header id='main-header'>
      <div className='header-content'>
        <Link to='/'>
          <img id='logo' src={logo} alt='LozeFeed'/>
        </Link>
        <Link to='/new'>
          <img id='upload' src={upload} alt='Publicar' />
        </Link>
      </div>
    </header>
  );
}

export default Header;