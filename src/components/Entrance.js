import React from 'react';
import '../App.css';
import Typist from 'react-typist';

class Entrance extends React.Component {

  render() { 
    return (
      <div className="container-fluid center-entrance">
        <Typist>
            <div className="row">
                    <h1 className="entrance-text">SELECT <span className="wildcard">*</span> FROM</h1>
                    <ul style={{paddingLeft: 10}}>
                        <li><a href="#">ABOUT_ME</a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
            </div>
        </Typist>
      </div>
    );
  }
}

export default Entrance;
