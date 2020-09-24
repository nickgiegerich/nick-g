import React from 'react';
import '../App.css';
import Languages from './skills/Languages';
import Links from './header/LinkNav';
import Title from './skills/Title';

class Skills extends React.Component {
  render() { 
  return (
        <div className="container-fluid">
            <Links/>  
            <Languages/>
          <div style={{paddingTop: '13%', width: '100%'}}>
            <Title/>
          </div>
        </div>
  
    );
  }
}

export default Skills;