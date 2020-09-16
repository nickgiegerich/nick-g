import React from 'react';
import '../../App.css';
import NavLinkMui from '../../NavLinkMui';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DropdownSelector from './Dropdown';
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';

const Execute = (props) => {
        let page = props.pageName;
        const buttonClass = props.itemSelected ? 'my-button' : 'my-button hide';
        // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} 1000ms infinite`;
        
        console.log(page);

        return (
        <List className={buttonClass}>
            <ListItem button component={NavLinkMui} to={'/'+page}>
                <ListItemText primary="RUN QUERY"/>
            </ListItem>
        </List>
);
    
}

export default Execute;