import React from 'react';
import '../App.css';
import Statement from './landingPage/Statement';
import DropdownSelector from './landingPage/Dropdown';

class Entrance extends React.Component {

  render() { 
  return (
              <div className="container center-component">
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
