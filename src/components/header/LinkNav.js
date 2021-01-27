/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Links() {

  return (
<nav className="navbar sticky-top navbar-expand-lg navbar-dark my-nav-bar">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <AnchorLink className="nav-link" href="#home">home<span className='pl-3'> / </span></AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink offset='75' className="nav-link" href="#about">about<span className='pl-3'> / </span></AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink offset='75' className="nav-link" href="#projects">projects<span className='pl-3'> / </span></AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink offset='75' className="nav-link" href="#skills">skills<span className='pl-3'> / </span></AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink offset='75' className="nav-link" href="#contact">contact</AnchorLink>
      </li>
    </ul>
  </div>
</nav>
  );
}