import React from 'react';
import '../../App.css';
import AboutTitle from './AboutTitle';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class About extends React.Component {
  render() { 
  return (
        <div className="row justify-content-center" style={{width: '-webkit-fill-available'}}>
            <div className='col-12 '>
                <div className='jumbotron about-me-container'>
                    <div className='about-me-content'>
                        <AboutTitle/>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <img className='my-image' src="./me.png" alt="me"/>
                            </div>
                            <div className='col-12'>
                                <h1 className="display-5 text-center pb-3">Hello, my name is Nick and . . .</h1>
                            </div>
                        </div>
                        <div className='row pt-5'>
                            <div className='col-lg-4 col-12'>
                                <p className="lead text-center about-text-1">I have</p>
                                <ul className='text-center' style={{listStylePosition: 'inside'}}>
                                    <li>my B.Sc in Computer Science.</li>
                                    <li>5 years of programming experience.</li>
                                    <li>2-3 years of professional experience.</li>
                                </ul>
                            </div> 
                            <div className='col-lg-4 col-12'>
                                <p className="lead text-center about-text-1">I can</p>
                                <ul className='text-center' style={{listStylePosition: 'inside'}}>
                                    <li>build full stack applications.</li>
                                    <li>use languages such as python and dart.</li>
                                    <li>create backends from scratch.</li>
                                </ul>
                            </div> 
                            <div className='col-lg-4 col-12'>
                                <p className="lead text-center about-text-1">I like</p>
                                <ul className='text-center' style={{listStylePosition: 'inside'}}>
                                    <li>skiing.</li>
                                    <li>rock climbing.</li>
                                    <li>riding my bike.</li>
                                </ul>
                            </div> 
                        </div>
                        <hr className="my-4"></hr>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <AnchorLink class="btn effect04" data-sm-link-text="CLICK" href="#projects"><span>projects</span></AnchorLink>
                            </div>
                            <div className='col-12 text-center'>
                                <AnchorLink class="btn effect04" data-sm-link-text="CLICK" href="#skills"><span>skills</span></AnchorLink>
                            </div>
                            <div className='col-12 text-center'>
                                <AnchorLink class="btn effect04" data-sm-link-text="CLICK" href="#contact"><span>contact</span></AnchorLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {/* <div className="col-lg-6 col-6">
            <p className='about-text text-center'>
                    I have a passion for computer science and problem solving and for the last <span className='about-text-1'>4</span> years I've been honing skills in various programming languages.
                    I am an extremely capable full stack developer but my real interest lies with building data driven applications. I enjoy utilizing various <span className='about-text-1'>Python</span>  frameworks and delivering useful
                    information through a clean front-end.
            </p>
            </div>
            <div className='col-lg-6 col-12 text-center'>
                <img width='250px' height='250px' src="./me.png" alt="me" className="rounded-circle"/>
            </div>
            <div className='col-lg-6 col-12'>
                <h4 className='about-text-1'>Notable Projects</h4>
                
                    <ul className='ml-4'>
                        <li>
                            Langlois, a mining company in Northeastern Canada, contracted me to develop an intranet 
                            data application to relieve their dependancy on Excel for information storage.
                            I used <span className='about-text-1'>HTML, CSS, JS,</span> and <span className='about-text-1'>PHP</span>  to construct a web application and stored the data
                            with the use of <span className='about-text-1'>SQL Server</span> and <span className='about-text-1'>IIS</span>. The application allowed Langlois to have single
                            source of truth for reporting and streamlined the data input process.
                        </li>
                        <li className='pt-3'>
                            As part of an internship in Hsinchu Taiwan at the Industrial Technology Research Institute (ITRI)
                            I was able to be part of two projects. For my first project I was tasked to design a GUI using <span className='about-text-1'>MatLab </span>
                            that would calculate the design specifications of computer microchips given various inputs. For project two
                            I was able to work with a PhD prospect to help train a Convolutional Neural Network, in <span className='about-text-1'>Python</span>, as part of his research.
                        </li>
                    </ul>
            </div> */}
        </div>
  
    );
  }
}

export default About;