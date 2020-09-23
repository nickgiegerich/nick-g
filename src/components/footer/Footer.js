import React from 'react';
import '../../App.css';

const Footer = () => { 
        return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src='./langIcons/github.svg' height='35px' width='35px'/>
                        </div>
                        <div className="col-4">
                            <img src='./langIcons/linkedin.svg' height='35px' width='35px'/>
                        </div>
                        <div className="col-4">
                            <img src='./langIcons/email.svg' height='35px' width='35px'/>
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