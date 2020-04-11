import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Typist from 'react-typist';
import Entrance from './components/Entrance'
import PageSelector from './components/PageSelector';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Entrance /> 
            </Col>
            <Col>
              <PageSelector />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
