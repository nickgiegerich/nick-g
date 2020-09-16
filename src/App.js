import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';
import Entrance from './components/Entrance'
import Bio from './components/Bio';
import Statement from './components/landingPage/Statement';
import 'react-typist/dist/Typist.css';
import Grid from '@material-ui/core/Grid';

export const App = () => (
      <div className="container d-flex align-items-center min-vh-100">
      
        <Router>
            <Route render={({location}) => (
                <Switch location={location}>
                    <Route path="/" exact component={props => <Entrance /> }/>
                     <Route path="/about" component={Bio}/>
                    {/*<Route path="/maps" component={MapPage}/>
                    <Route path="/book" component={Book}/>
                    <Route path="/strategy" component={StrategyPage}/>
                    <Route path="/voyage" component={VoyagePage}/>
                    <Route path="/investment" component={InvestmentPage}/> 
                    <Route path="/gallery" component={GalleryPage}/>
                    <Route path="/contact" component={Contact}/>  */}
                </Switch>
            )}/>
        </Router>
      
      </div>
    );


export default App;
