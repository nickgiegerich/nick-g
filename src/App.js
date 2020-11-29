import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LinkNav from './components/header/LinkNav';
import Entrance from './components/Entrance';
import AboutTitle from './components/about/AboutTitle'
import About from './components/about/About'
import Title from './components/skills/SkillsTitle';
import ProjTitle from './components/projects/ProjectsTitle';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/footer/Footer'
import 'react-typist/dist/Typist.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class App extends React.Component {

    render() {
      return (
        <div className="container-fluid">
        <div>
            <LinkNav/>
        </div>
        <div>
          {/* HERO HEADER | GREETING  */}
          <div className='hero-section-centered'>
            <div>
              <Entrance/>
            </div>
          </div>

          {/* ABOUT */}
          <div id='about'>
            <div className='title-centered'>
              <AboutTitle/>
            </div>

            <div className='d-flex justify-content-center'>
              <About/>
            </div>
          </div>

          {/* PROJECTS - TODO */}
          <div id='projects'>
            <div className='title-centered'>
              <ProjTitle/>
            </div>

            <div >

            </div>
          </div>

          {/* SKILLS */}
          <div id='skills' className='' style={{height: "100vh"}}>
            <div className='title-centered'>
              <Title/>
            </div>
            <div>
              <Skills/>
            </div>
          </div>

          {/* RESUME - TODO */}
        </div>
        <footer>
          <Footer/>
        </footer>
        </div>
      )
    }
  }


export default App;
