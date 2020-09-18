import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Entrance from './components/Entrance'
import Bio from './components/Bio';
import Experience from './components/Experience';
import 'react-typist/dist/Typist.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class App extends React.Component {

    render() {
      return (
        <Router>
          <div className="container-fluid">
            <Route render={({ location }) => {
  
              return (
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                  >
                    <section className="route-section">
                    <Switch location={location}>
                      <Route exact path="/" component={Entrance}/>
                      <Route path="/about" component={Bio} />
                      <Route path="/experience" component={Experience} />
                    </Switch>
                    </section>
                  </CSSTransition>
                </TransitionGroup>
              )
            }}/>
          </div>
        </Router>
      )
    }
  }


export default App;
