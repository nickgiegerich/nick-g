import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Entrance from './components/Entrance'

class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <Entrance />
      </div>
    );
  }
}

export default App;
