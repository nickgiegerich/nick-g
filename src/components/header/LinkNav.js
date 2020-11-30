/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Links() {

  return (
<nav className="navbar navbar-dark fixed-top">
<div className="container-fluid">
    <AnchorLink className="navbar-brand" href="/home">N. Giegerich</AnchorLink>
    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav shift-nav">
            {/* Can use offset='100' to create distance on smooth scroll from top */}
            <AnchorLink className="nav-item nav-link my-nav-item" href="/home">home</AnchorLink>
            <AnchorLink offset='100' className="nav-item nav-link my-nav-item" href="/about">about</AnchorLink>
            <AnchorLink offset='100' className="nav-item nav-link my-nav-item" href="/projects">projects</AnchorLink>
            <AnchorLink className="nav-item nav-link my-nav-item" href="/skills">skills</AnchorLink>
            <AnchorLink className="nav-item nav-link my-nav-item" href="/resume">resumé</AnchorLink>
        </div>
    </div>
</div>
</nav>
  );
}