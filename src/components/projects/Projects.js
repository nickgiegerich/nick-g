import React from 'react';
import '../../App.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Projects extends React.Component {
  render() { 
  return (
    <div className='row'>
        <div className='col-lg-4 col-12 pb-5'>
            <Card className='projects-card projects-card-shadow'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <Card.Img className='embed-responsive-item' variant='top' src='./project-imgs/fwm.png'/>
                </div>
                <Card.Body className='text-center'>
                <Card.Title className='highlight-text'>forever wild media</Card.Title>
                <Card.Text className='plain-text'>
                    I built this site using Wordpress as a starting point and added
                    custom front-end components where they were needed. We needed
                    a clean functional website quickly as well as fully functioning 
                    e-store.
                </Card.Text>
                <Button className='my-button' href='https://foreverwild.media' target="_blank">check it out</Button>
            </Card.Body>
            <ListGroup className="text-center list-group-flush">
                <ListGroupItem className='projects-card'>wordpress</ListGroupItem>
                <ListGroupItem className='projects-card'>html, css, js, and boostrap</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
        <div className='col-lg-4 col-12 pb-5'>
            <Card className='projects-card projects-card-shadow'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <Card.Img className='embed-responsive-item' variant='top' src='./project-imgs/crypto.png'/>
                </div>
                <Card.Body className='text-center'>
                <Card.Title className='highlight-text'>crypto watcher</Card.Title>
                <Card.Text className='plain-text'>
                    This was the first application I built using the Streamlit framework. It's 
                    still a work in progress but in the end I will have a fully functional crypto
                    currency dashboard. It utilizes the Coinbase Pro API to render the most current
                    crypto data for all of the major coins.
                </Card.Text>
                <Button className='my-button  mr-3' href='https://share.streamlit.io/nickgiegerich/streamlit-crypto-dashboard/myapp.py' target="_blank">live app</Button>
                <Button className='my-button  mr-3' href='https://github.com/nickgiegerich/streamlit-crypto-dashboard' target="_blank">code</Button>
            </Card.Body>
            <ListGroup className="text-center list-group-flush">
                <ListGroupItem className='projects-card'>streamlit</ListGroupItem>
                <ListGroupItem className='projects-card'>python</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
        <div className='col-lg-4 col-12 pb-5'>
            <Card className='projects-card projects-card-shadow'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <Card.Img className='embed-responsive-item' variant='top' src='./project-imgs/test.png'/>
                </div>
                <Card.Body className='text-center'>
                <Card.Title className='highlight-text'>powder chaser</Card.Title>
                <Card.Text className='plain-text'>
                    For this project I will be utilizing Streamlit, Python, as well as React.
                    The main goal is to grab hourly data from the various Snotel stations in the
                    PNW and from that data create a live snow watching application. I have other 
                    projects that need to be cleaned up before I can start this one but stay tuned!
                </Card.Text>
            </Card.Body>
            <ListGroup className=" text-center list-group-flush">
                <ListGroupItem className='projects-card'>streamlit</ListGroupItem>
                <ListGroupItem className='projects-card'>python</ListGroupItem>
                <ListGroupItem className='projects-card'>react</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
    </div>
  
    );
  }
}

export default Projects;