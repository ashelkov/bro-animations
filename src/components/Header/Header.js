import React from 'react';
import './Header.scss';

import headerLogo from '../../assets/images/header_logo.png';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <img src={headerLogo} alt="brocoders logo" />
        <nav className="nav">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Sases</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Industries</a>
            </li>
            <li>
              <a href="/">Technology</a>
            </li>
            <li>
              <a href="/">Partnership</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <button className="button">Get in touch</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
