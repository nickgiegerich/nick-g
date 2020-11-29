import React from 'react';
import '../App.css';
import Languages from './skills/Languages';
import Links from './header/LinkNav';
import Title from './skills/SkillsTitle';

class Skills extends React.Component {
  render() { 
  return (
        <div id='skills' className="row">
          <div className="col-12">
            <Languages/>
          </div> 
        </div>
  
    );
  }
}

export default Skills;