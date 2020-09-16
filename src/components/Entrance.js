import React from 'react';
import '../App.css';
import Statement from './landingPage/Statement';
import DropdownSelector from './landingPage/Dropdown';
import Execute from './landingPage/Execute';
import Typist from 'react-typist';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Entrance extends React.Component {
  
  state = {
    itemSelected: false
  }

  itemSelected() {
    this.setState({itemSelected: true });
  }


  render() { 
  return (
            
              
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <Statement/>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <DropdownSelector/>
                  </div>
                </div>
                
                
              </div>
        
    );
  }
}

export default Entrance;
