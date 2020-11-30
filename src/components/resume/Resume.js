import React from 'react';
import Pdf from '../../documents/resume.pdf';

class Resume extends React.Component {

  render() {

    return (
      <div className='row'>
          <div className='col-12 text-center'>
            <a href = {Pdf} target = "_blank" rel="noopener noreferrer">
              <img className='resume-photo-style' height='350px' width='auto' src='./resume/res.png' alt='resume'/>
            </a>
          </div>
      </div>
    );
  }
}

export default Resume;