import React from 'react';
import '../../App.css';

const Footer = () => { 
        return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <a href='https://github.com/nickgiegerich' target='_blank' rel="noopener noreferrer">
                                <img src='./langIcons/github.svg' height='35px' width='35px' alt='github'/>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href='https://www.linkedin.com/in/nick-giegerich-62b369168/' target='_blank' rel="noopener noreferrer">
                                <img src='./langIcons/linkedin.svg' height='35px' width='35px' alt='linkedin'/>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href = "mailto: ngiegerich@gmail.com" target='_blank' rel="noopener noreferrer">
                                <img src='./langIcons/email.svg' height='35px' width='35px' alt='email'/>
                            </a>
                        </div>
                        <div className="col-12 pt-4">
                            <p>made with <span className="footer-heart">&hearts;</span> by me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;