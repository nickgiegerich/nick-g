import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className='my-button' style={{color: '#FF1493'}}>
        <span className='my-menu-button p-3'>Go Somewhere Else...</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="my-menu-item">
            <span className='my-menu-item'>about</span>
        </MenuItem>
        <MenuItem onClick={handleClose} className="my-menu-item">
            <span className='my-menu-item'>job experience</span>
        </MenuItem>
        <MenuItem onClick={handleClose} className="my-menu-item">
            <span className='my-menu-item'>client work</span>
        </MenuItem>
      </Menu>
    </div>
  );
}