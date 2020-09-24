/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    <Typography className={classes.root}>
        <div className="row d-flex align-self-center text-center" style={{width: '100vw', fontSize: '18px'}}>
            <div className="col-4 d-flex flex-column pr-5"> 
                <Link className="my-menu-item" component={NavLinkMui} to='/about'>
                    about
                </Link>
                <Link className="my-menu-item" component={NavLinkMui} to='/expertise'>
                    expertise
                </Link>
                <Link className="my-menu-item" component={NavLinkMui} to='/job-experience'>
                    job experience
                </Link>
            </div>
            <div className="col-4 d-flex flex-column pr-5"> 
                <Link className="my-menu-item" component={NavLinkMui} to='/'>
                    home
                </Link>
            </div>
            <div className="col-4 d-flex flex-column pl-5"> 
                <Link className="my-menu-item" component={NavLinkMui} to='/projects'>
                    projects
                </Link>
                <Link className="my-menu-item" component={NavLinkMui} to='/client-work'>
                    client work
                </Link>
                <Link className="my-menu-item" component={NavLinkMui} to='/contact'>
                    contact
                </Link>
            </div>
        </div>
    </Typography>
  );
}