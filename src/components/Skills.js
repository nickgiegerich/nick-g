import React from 'react';
import '../App.css';
import Languages from './skills/Languages';

class Skills extends React.Component {
  render() { 
  return (
        <div className="row">
          <div className="col-12">
            <Languages/>
          </div> 
        </div>
  
    );
  }
}

export default Skills;