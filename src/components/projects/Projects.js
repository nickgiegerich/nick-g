import React from 'react';
import '../../App.css';
import ProjectsTitle from './ProjectsTitle';
import { FaCode, FaEye } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Projects extends React.Component {
  render() { 
  return (
    <div className='row'>
        <div className='col-12'>
            <div className='jumbotron projects-container'>
                <ProjectsTitle/>
                <Fade cascade>
                <div className='row'>
       
                    <div className='col-md-6 col-12 single-proj-container pt-5'>
                        <img className='project-img' src='./project-imgs/fwm.png'/>
                        <div className='project-info'>
                            <div className='row'>
                                <div className='col-12'><h3>Forever Wild Media</h3></div>
                                <div className='col-12'><p>wordpress website with an e-commerce store</p></div>
                                <div className='col-12'><a className='proj-icon' href='https://foreverwild.media' target="_blank"><FaEye size='3rem'/></a></div>
                            </div>  
                        </div>
                    </div>
                   
                    <div className='col-md-6 col-12 single-proj-container pt-5'>
                        <img className='project-img' src='./project-imgs/crypto.png'/>
                        <div className='project-info'>
                            <div className='row'>
                                <div className='col-12'><h3>Crypto Watcher</h3></div>
                                <div className='col-12'><p>crypto currency customizable dashboard</p></div>
                                <div className='col-12'><p>streamlit, python</p></div>
                                <div className='col-6'><a className='proj-icon' href='https://share.streamlit.io/nickgiegerich/streamlit-crypto-dashboard/myapp.py' target="_blank"><FaEye size='3rem'/></a></div>
                                <div className='col-6'><a className='proj-icon' href='https://github.com/nickgiegerich/streamlit-crypto-dashboard' target="_blank"><FaCode size='3rem'/></a></div>
                            </div>  
                        </div>
                    </div>
                 
                    <div className='col-md-6 col-12 single-proj-container pt-5'>
                        <img className='project-img' src='./project-imgs/pow-pal-code.png'/>
                        <div className='project-info'>
                            <div className='row'>
                                <div className='col-12'><h3>Pow Pal App</h3></div>
                                <div className='col-12'><p>avalanche data mobile app</p></div>
                                <div className='col-12'><p>flutter, dart, django, python</p></div>
                                <div className='col-12'><a className='proj-icon' href='https://github.com/nickgiegerich/pow-pal-mobile' target="_blank"><FaCode size='3rem'/></a></div>
                            </div>  
                        </div>
                    </div>
                    <div className='col-md-6 col-12 single-proj-container pt-5'>
                        <img className='project-img' src='./project-imgs/pow-pal-code.png'/>
                        <div className='project-info'>
                            <div className='row'>
                                <div className='col-12'><h3>CPU Scheduling Simulator</h3></div>
                                <div className='col-12'><p>java program to simulate a computer scheduler</p></div>
                                <div className='col-12'><p>java</p></div>
                                <div className='col-12'><a className='proj-icon' href='https://github.com/nickgiegerich/cpu-scheduling-simulation' target="_blank"><FaCode size='3rem'/></a></div>
                            </div>  
                        </div>
                    </div>
                    <div className='col-md-6 col-12 single-proj-container pt-5'>
                        <img className='project-img' src='./project-imgs/gol.png'/>
                        <div className='project-info'>
                            <div className='row'>
                                <div className='col-12'><h3>Conway's Game of Life</h3></div>
                                <div className='col-12'><p>an ode to the game of life</p></div>
                                <div className='col-12'><p>stack: streamlit, python</p></div>
                                <div className='col-6'><a className='proj-icon' href='https://share.streamlit.io/nickgiegerich/game-of-life/main.py' target="_blank"><FaEye size='3rem'/></a></div>
                                <div className='col-6'><a className='proj-icon' href='https://github.com/nickgiegerich/game-of-life' target="_blank"><FaCode size='3rem'/></a></div>
                            </div>  
                        </div>
                    </div>
                    <div className='col-md-6 col-12 single-proj-container pt-5'>
                        <img className='project-img' src='./project-imgs/routing.png'/>
                        <div className='project-info'>
                            <div className='row'>
                                <div className='col-12'><h3>UPS Routing Simulator</h3></div>
                                <div className='col-12'><p>implementation of the 3-opt algorithm to solve the TSP</p></div>
                                <div className='col-12'><p>python</p></div>
                                <div className='col-12'><a className='proj-icon' href='https://github.com/nickgiegerich/wgups-routing-program' target="_blank"><FaCode size='3rem'/></a></div>
                            </div>  
                         </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
  
    );
  }
}

export default Projects;