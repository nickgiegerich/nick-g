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
                <Card.Img variant='top' src='./project-imgs/fwm.png'/>
                <Card.Body>
                <Card.Title>Forever Wild Media</Card.Title>
                <Card.Text>
                    I built this site using Wordpress as a starting point and added
                    custom front-end components where they were needed. We needed
                    a clean functional website quickly as well as fully functioning 
                    e-store.
                </Card.Text>
                <Button href='https://foreverwild.media' target="_blank">check it out</Button>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className='projects-card'>Wordpress</ListGroupItem>
                <ListGroupItem className='projects-card'>HTML, CSS, JS, and Bootstrap</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
        <div className='col-lg-4 col-12 pb-5'>
            <Card className='projects-card projects-card-shadow'>
                <Card.Img variant='top' src='./project-imgs/crypto.png'/>
                <Card.Body>
                <Card.Title>Crypto Watcher</Card.Title>
                <Card.Text>
                    This was the first application I built using the Streamlit framework. It's 
                    still a work in progress but in the end I will have a fully functional crypto
                    currency dashboard. It utilizes the Coinbase Pro API to render the most current
                    crypto data for all of the major coins.
                </Card.Text>
                <Button className='mr-3' href='https://share.streamlit.io/nickgiegerich/streamlit-crypto-dashboard/myapp.py' target="_blank">live app</Button>
                <Button href='https://github.com/nickgiegerich/streamlit-crypto-dashboard' target="_blank">code</Button>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className='projects-card'>Streamlit</ListGroupItem>
                <ListGroupItem className='projects-card'>Python</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
        <div className='col-lg-4 col-12 pb-5'>
            <Card className='projects-card projects-card-shadow'>
                <Card.Img  variant='top' src='./project-imgs/snow.png'/>
                <Card.Body>
                <Card.Title>Live Powder App</Card.Title>
                <Card.Text>
                    For this project I will be utilizing Streamlit, Python, as well as React.
                    The main goal is to grab hourly data from the various Snotel stations in the
                    PNW and from that data create a live snow watching application. I have other 
                    projects that need to be cleaned up before I can start this one but stay tuned!
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className='projects-card'>Streamlit</ListGroupItem>
                <ListGroupItem className='projects-card'>Python</ListGroupItem>
                <ListGroupItem className='projects-card'>React</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
    </div>
  
    );
  }
}

export default Projects;