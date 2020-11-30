import React from 'react';
import '../App.css';
import MyXp from './workXP/MyXp';
import Title from './workXP/Title';
import Links from './header/LinkNav';

class Experience extends React.Component {
  render() { 
  return (
        <div className="container-fluid center-component">
            <Links/>  
          <div style={{paddingTop: '13%', width: '100%'}}>
            <Title/>
            <MyXp/>
          </div>
        </div>
  
    );
  }
}

export default Experience;