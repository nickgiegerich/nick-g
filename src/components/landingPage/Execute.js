import React from 'react';
import '../../App.css';
import NavLinkMui from '../../NavLinkMui';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Execute = (props) => {
        let page = props.pageName; // setting page variable to what is passed in by dropdown
        const buttonClass = props.itemSelected ? 'my-button' : 'my-button hide'; // if dropdown item is selected show execute button
        return (
        <List className={buttonClass}>
            <ListItem button component={NavLinkMui} to={'/'+page}>
                <ListItemText primary="RUN QUERY"/>
            </ListItem>
        </List>
); 
}

export default Execute;