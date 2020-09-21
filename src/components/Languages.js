import React from 'react';
import '../App.css';

class Languages extends React.Component {
  render() { 
  return (
        <div className="float-container">
            <div className="all-objects">
                <div className="speed-one begin">
                    <img src='./langIcons/java.svg'/>
                </div>
                <div className="speed-three split-bq">
                    <img src='./langIcons/python.svg'/>
                </div>
                <div className="speed-two quarter">
                    <img src='./langIcons/sql.svg'/>
                </div>
                <div className="speed-four split-qh">
                    <img src='./langIcons/js.svg'/>
                </div>
                <div className="speed-two half">
                    <img src='./langIcons/oracle.svg'/>
                </div>
                <div className="speed-three split-ht">
                    <img src='./langIcons/laravel.svg'/>
                </div>
                <div className="speed-one three-quarter">
                    <img src='./langIcons/git.svg'/>
                </div>
                <div className="speed-three split-te">
                    <img src='./langIcons/jquery.svg'/>
                </div>
                <div className="speed-four three-quarter">
                    <img src='./langIcons/php.svg'/>
                </div>
                <div className="speed-four begin">
                    <img src='./langIcons/react.svg'/>
                </div>
                <div className="speed-three split-bq">
                    <img src='./langIcons/html.svg'/>
                </div>
            </div>
        </div>
    );
  }
}

export default Languages;