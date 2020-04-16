import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Entrance from './components/Entrance'
import 'react-typist/dist/Typist.css';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {

  render() { 
    return (
      <div className="App">
      <Grid
          container 
          direction="row"
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}>
        
          <Entrance /> 
    
      </Grid>
      </div>
    );
  }
}

export default App;
