import React from 'react';
import '../../App.css';

class Languages extends React.Component {
  render() { 
  return (
        <div className="float-container">
            <div className="all-objects">
                <div className="speed-four begin">
                    <span style={{marginTop: '50vh' ,position: 'absolute', color: 'white'}}>back-end</span>
                    <img src='./langIcons/java.svg'/>
                </div>
                <div className="speed-four begin">
                    <img style={{marginTop: '80vh'}} src='./langIcons/python.svg'/>
                </div>
                <div className="speed-four begin">
                    <img style={{marginTop: '100vh'}} src='./langIcons/php.svg'/>
                </div>
                <div className="speed-three quarter">
                    {/* <span style={{marginTop: '50vh' ,position: 'absolute', color: 'white'}}>front-end</span> */}
                    <img src='./langIcons/js.svg'/>
                </div>
                <div className="speed-three quarter">
                    <img style={{marginTop: '80vh'}} src='./langIcons/react.svg'/>
                </div>
                <div className="speed-three quarter">
                    <img style={{marginTop: '100vh'}} src='./langIcons/jquery.svg'/>
                </div>
                <div className="speed-three quarter">
                    <img style={{marginTop: '120vh'}} src='./langIcons/html.svg'/>
                </div>
                <div className="speed-three quarter">
                    <img style={{marginTop: '140vh'}} src='./langIcons/css.svg'/>
                    <span style={{marginTop: '160vh' ,position: 'absolute', color: 'white'}}>front-end</span>
                </div>
                <div className="speed-two half">
                    <span style={{marginTop: '50vh' ,position: 'absolute', color: 'white'}}>database engines</span>
                    <img src='./langIcons/oracle.svg'/>
                </div>
                <div className="speed-two half">
                    <img style={{marginTop: '80vh'}} src='./langIcons/oracle.svg'/>
                </div>
                <div className="speed-one three-quarter">
                    <img src='./langIcons/laravel.svg'/>
                    <span style={{marginTop: '80vh' ,position: 'absolute', color: 'white'}}>frameworks</span>
                </div>
                <div className="speed-four end">
                    <span style={{marginTop: '50vh' ,position: 'absolute', color: 'white'}}>version control</span>
                    <img src='./langIcons/git.svg'/>
                </div>
            </div>
        </div>
    );
  }
}

export default Languages;