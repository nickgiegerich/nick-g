import React from 'react';
import '../App.css';


import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';




class PageSelector extends React.Component {


  render() { 
      const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} 1000ms infinite`;

    return (
              
                
                <div style={{display: 'flex'}}>
                    <Bounce><button type="submit">Execute ></button></Bounce>
                </div>
                
              
        
    );
  }
}

export default PageSelector;