import React from 'react';
import '../App.css';
import Languages from './skills/Languages';

class Skills extends React.Component {
  render() { 
  return (
        <div className="row" style={{margin: '0'}}>
          <div className="col-12" style={{padding: '0'}}>
            <Languages/>
          </div> 
        </div>
  
    );
  }
}

export default Skills;