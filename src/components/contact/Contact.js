import React from 'react';
import Pdf from '../../documents/resume.pdf';

class Contact extends React.Component {

  render() {

    return (
      <div className='row'>
          <div className='col-12 text-center'>
            <h4 className='highlight-text'>resumé upon request </h4>
            <p className='electric-pink'>ngiegerich<span className='electric-blue'>AT</span>gmail.com</p>
          </div>
          <div className='col-12 text-center'>
            <a className='pr-1' href='https://github.com/nickgiegerich' target='_blank' rel="noopener noreferrer">
              <img src='./langIcons/github.svg' height='35px' width='35px' alt='github'/>
            </a>
            <a className='pr-1' href='https://www.linkedin.com/in/nick-giegerich-62b369168/' target='_blank' rel="noopener noreferrer">
              <img src='./langIcons/linkedin.svg' height='35px' width='35px' alt='linkedin'/>
            </a>
          </div>
      </div>
    );
  }
}

export default Contact;