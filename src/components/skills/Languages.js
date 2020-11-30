import React from 'react';
import '../../App.css';

class Languages extends React.Component {
  render() { 
  return (
        <div className="float-container">
            <div className="all-objects">
                <div className="speed-one dist-1">
                    <img style={{marginTop:'80vh'}} src='./langIcons/java.svg' alt='floating-icon'/>
                </div>
                <div className="speed-two dist-2">
                    <img style={{marginTop:'80vh'}} src='./langIcons/python.svg' alt='floating-icon'/>
                </div>
                <div className="speed-two dist-11">
                    <img style={{marginTop:'85vh'}} src='./langIcons/php.svg' alt='floating-icon'/>
                </div>
                <div className="speed-four dist-4">
                    <img style={{marginTop:'80vh'}} src='./langIcons/js.svg' alt='floating-icon'/>
                </div>
                <div className="speed-one dist-5">
                    <img style={{marginTop:'85vh'}} src='./langIcons/react.svg' alt='floating-icon'/>
                </div>
                <div className="speed-three dist-6">
                    <img style={{marginTop:'80vh'}} src='./langIcons/jquery.svg' alt='floating-icon'/>
                </div>
                <div className="speed-four dist-7">
                    <img style={{marginTop:'85vh'}} src='./langIcons/html.svg' alt='floating-icon'/>
                </div>
                <div className="speed-two dist-8">
                    <img style={{marginTop:'100vh'}} src='./langIcons/css.svg' alt='floating-icon'/>
                </div>
                <div className="speed-one dist-9">
                    <img style={{marginTop:'100vh'}} src='./langIcons/oracle.svg' alt='floating-icon'/>
                </div>
                <div className="speed-three dist-10">
                <img style={{marginTop:'85vh'}} src='./langIcons/django.svg' alt='floating-icon'/>
                </div>
                <div className="speed-one dist-12">
                    <img src='./langIcons/laravel.svg' alt='floating-icon'/>
                </div>
                <div className="speed-four dist-14">
                    <img style={{marginTop:'100vh'}} src='./langIcons/git.svg' alt='floating-icon'/>
                </div>
                <div className="speed-one dist-7">
                    <img src='./langIcons/postgresql.svg' alt='floating-icon'/>
                </div>
                <div className="speed-two dist-14">
                    <img src='./langIcons/matlab.svg' alt='floating-icon'/>
                </div>
            </div>
        </div>
    );
  }
}

export default Languages;