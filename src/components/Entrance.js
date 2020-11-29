import React from 'react';
import '../App.css';
import Statement from './landingPage/Statement';
import DropdownSelector from './landingPage/Dropdown';

class Entrance extends React.Component {

  render() { 
  return (
                  <div className="row">
                    <div className="col-12">
                      <Statement/>
                    </div>
                    <div className="col-12">
                      <DropdownSelector/>
                    </div>
                  
                  </div>
   
    );
  }
}

export default Entrance;
