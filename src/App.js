import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Entrance from './components/Entrance'
import PageSelector from './components/PageSelector';
import ExecuteButton from './components/ExecuteButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'react-typist/dist/Typist.css';

class App extends React.Component {

  render() { 
    return (
      <div style={{paddingTop: '25%'}} className="App">
        <Container>
          <Row style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Entrance /> 
              <PageSelector />
              <ExecuteButton/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
