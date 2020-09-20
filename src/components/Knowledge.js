import React from 'react';
import '../App.css';
import FloatJava from './floatingIcons/FloatJava';
import FloatPython from './floatingIcons/FloatPython';
import FloatReact from './floatingIcons/FloatReact';
import FloatPhp from './floatingIcons/FloatPhp';
import FloatSql from './floatingIcons/FloatSql';
import FloatJquery from './floatingIcons/FloatJquery';
import FloatOracle from './floatingIcons/FloatOracle';
import FloatLaravel from './floatingIcons/FloatLaravel';
import FloatJs from './floatingIcons/FloatJs';
import FloatGit from './floatingIcons/FloatGit';
import FloatCss from './floatingIcons/FloatCss';
import FloatBoot from './floatingIcons/FloatBoot';
import FloatHtml from './floatingIcons/FloatHtml';

class Experience extends React.Component {
  render() { 
  return (
          <div className="">
              <div className="float-container">
                <div className="all-objects">
                  <div className="animate-java"></div>
                  <div className="float-child"><FloatJava/></div>
                  <div className="float-child"><FloatPython/></div>
                  <div className="float-child"><FloatReact/></div>
                  <div className="float-child"><FloatPhp/></div>
                  <div className="float-child"><FloatSql/></div> 
                  {/* Below change x */}
                  <div className="float-child"><FloatOracle/></div>
                  <div className="float-child"><FloatJquery/></div>
                  <div className="float-child"><FloatLaravel/></div>
                  <div className="float-child"><FloatJs/></div>
                  <div className="float-child"><FloatGit/></div>
                  <div className="float-child"><FloatCss/></div>
                  <div className="float-child"><FloatBoot/></div>
                  <div className="float-child"><FloatHtml/></div>
                </div>
                
              </div>
          </div>
    );
  }
}

export default Experience;