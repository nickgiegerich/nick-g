import React from 'react';
import '../../App.css';

class About extends React.Component {
  render() { 
  return (
        <div id='skills' className="row">
          <div className="col-6">
            <img width='250px' height='250px' src="./me.png" alt="picture-of-me" class="rounded-circle"/>
          </div> 
          <div className="col-6">
            <p className='about-text'>
                I have a passion for computer science.
            </p>
          </div> 
        </div>
  
    );
  }
}

export default About;