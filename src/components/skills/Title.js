import React from 'react';
import Typist from 'react-typist';
import '../../App.css';

export const Title = () => { 
    return (
        <div className="row sub-header">
            <div className="col-12">
                <Typist className="sub-title">
                    <span>here is the tech I'm most familiar with</span>
                    
                    {/* <Typist.Delay ms={5000}/>
                    <p>Liking what you seeeee???</p>
                    <Typist.Delay ms={4000}/>
                    <p><span>YES!</span>   <span>nope.</span></p> */}
                </Typist>
            </div>
        </div>
        
    );
}

export default Title;