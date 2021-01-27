import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import LinkNav from './components/header/LinkNav';
import Entrance from './components/Entrance';
import AboutTitle from './components/about/AboutTitle'
import Statement from './components/landingPage/Statement'
import About from './components/about/About'
import Title from './components/skills/SkillsTitle';
import ProjTitle from './components/projects/ProjectsTitle';
import Projects from './components/projects/Projects';
import ContactTitle from './components/contact/ContactTitle';
import Contact from './components/contact/Contact';
import Skills from './components/Skills';
import Footer from './components/footer/Footer'
import 'react-typist/dist/Typist.css';
import Fade from 'react-reveal/Fade';


class App extends React.Component {

    render() {
      return (
        <div id='home' className="container-fluid">
          <div className='pt-2 title-centered'>
            <Statement/>          
          </div>

          {/* NAV BAR */}
     
          <LinkNav/>
  
          {/* ABOUT */}
            {/* <div id='about' className='pt-5 title-centered'>
              <AboutTitle/>
            </div> */}
          
          <Fade cascade>
            <div id='about' className='d-flex justify-content-center pt-3'>
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
          <div id='contact' style={{paddingTop:'35px', paddingBottom:'65px'}}>
            <div className='title-centered'>
              <ContactTitle/>
            </div>

            <div>
              <Contact/>
            </div>
          </div>

        {/* FOOTER */}
          <footer>
            <Footer/>
          </footer>
          </Fade>
        </div>
      )
    }
  }


export default App;
