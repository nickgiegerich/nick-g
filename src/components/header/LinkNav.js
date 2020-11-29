/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NavLinkMui from '../../NavLinkMui';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
<nav className="navbar navbar-dark fixed-top">
<div className="container-fluid">
    <a className="navbar-brand" href="#">N. Giegerich</a>
    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav shift-nav">
            {/* Can use offset='100' to create distance on smooth scroll from top */}
            <AnchorLink className="nav-item nav-link" href="/">home</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="/about">about</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="projects">projects</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="/skills">skills</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="/resume">resumé</AnchorLink>
        </div>
    </div>
</div>
</nav>
  );
}