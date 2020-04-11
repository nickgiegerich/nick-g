import React from 'react';
import '../App.css';
import Typist from 'react-typist';


class Entrance extends React.Component {

  render() { 
    return (
        <Typist>
          <h1 className="entrance-text">SELECT <span className="wildcard">*</span> FROM</h1>
        </Typist>
    );
  }
}

export default Entrance;
