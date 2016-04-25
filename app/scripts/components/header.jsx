import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {

  // <header className="clearfix">
  //     <Link to="home">Razor</Link>
  //     <nav className="clearfix">
  //       <div className="nav-item">
  //         <Link to="info">Repos</Link>
  //       </div>
  //       <div className="nav-item">
  //         <Link to="info">Tags</Link>
  //       </div>
  //       <div className="nav-item">
  //         <Link to="info">Policies</Link>
  //       </div>
  //       <div className="nav-item">
  //         <Link to="info">Brokers</Link>
  //       </div>
  //     </nav>
  //   </header>
  return (
    <header className="cd-main-header">
    <Link to="home" className="cd-logo"><img src="images/cd-logo.svg" alt="Logo" /></Link>
    <div className="cd-search is-hidden">
      <form action="#0">
        <input type="search" placeholder="Search..." />
      </form>
    </div>
    <a href="#0" className="cd-nav-trigger">Menu</a>
    <nav className="cd-nav">
      <ul className="cd-top-nav">
        <li className="has-children account">
          <a href="#0">
            <img src="images/cd-avatar.png" alt="avatar" />Account
          </a>
          <ul>
            <li><a href="#0">My Account</a></li>
            <li><a href="#0">Edit Account</a></li>
            <li><a href="#0">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  )
};

export default Header;