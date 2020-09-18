import React from 'react';
import '../App.css';
import MyXp from './workXP/MyXp';
import Title from './workXP/Title';




class Experience extends React.Component {

  render() { 
  return (
              <div className="container-fluid center-component">
                <div className="row">
                  <div className="col-12">
                    <Title/>
                  </div>
                  <div className="col-12">
                    <MyXp/>
                  </div>
                </div>
              </div>
    );
  }
}

export default Experience;