import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import LinkNav from './components/header/LinkNav';
import Entrance from './components/Entrance';
import AboutTitle from './components/about/AboutTitle'
import About from './components/about/About'
import Title from './components/skills/SkillsTitle';
import ProjTitle from './components/projects/ProjectsTitle';
import Projects from './components/projects/Projects';
import ResumeTitle from './components/resume/ResumeTitle';
import Resume from './components/resume/Resume';
import Skills from './components/Skills';
import Footer from './components/footer/Footer'
import 'react-typist/dist/Typist.css';


class App extends React.Component {

    render() {
      return (
        <div id='home' className="container-fluid">
          {/* NAV BAR */}
          <LinkNav/>
          
          {/* HERO HEADER | GREETING  */}
          <div className='hero-section-centered'>
            <div>
              <Entrance/>
            </div>
          </div>

          {/* ABOUT */}
         
            <div id='about' className='title-centered'>
              <AboutTitle/>
            </div>

            <div className='d-flex justify-content-center'>
              <About/>
            </div>

          {/* PROJECTS */}
          <div id='projects' className='pt-5 pb-5'>
            <div className='title-centered'>
              <ProjTitle/>
            </div>

            <div>
              <Projects/>
            </div>
          </div>

          {/* SKILLS */}
          <div id='skills' className='pt-5 pb-5 mb-5' style={{height: '70vh'}}>
            <div className='title-centered'>
              <Title/>
            </div>
            <div>
              <Skills/>
            </div>
          </div>

          {/* RESUME */}
          <div id='resume' style={{paddingTop:'35px', paddingBottom:'65px'}}>
            <div className='title-centered'>
              <ResumeTitle/>
            </div>

            <div>
              <Resume/>
            </div>
          </div>

        {/* FOOTER */}
          <footer>
            <Footer/>
          </footer>
        </div>
      )
    }
  }


export default App;
