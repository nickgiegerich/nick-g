import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Entrance from './components/Entrance'
import Bio from './components/Bio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/footer/Footer'
import 'react-typist/dist/Typist.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class App extends React.Component {

    render() {
      return (
        <div className="page-container">
          <div className="content-wrap">
        <Router>
            <Route render={({ location }) => {
  
              return (
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                  >
                    
                    <Switch location={location}>
                        <Route exact path="/" component={Entrance}/>
                        <Route path="/about" component={Bio} />
                        <Route path="/job-experience" component={Experience} />
                        <Route path="/expertise" component={Skills} />
                    </Switch>
                    
                  </CSSTransition>
                </TransitionGroup>
              )
            }}/>
        </Router>
        </div>
        <Footer/>
        </div>
      )
    }
  }


export default App;
