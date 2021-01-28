import React from 'react';
import '../../App.css';

const Footer = () => { 
    const today = new Date();
        return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-4">
                            <p>made with <span className="footer-heart">&hearts;</span> by nick giegerich</p>
                            <p><span className="">&copy;</span> {today.getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;