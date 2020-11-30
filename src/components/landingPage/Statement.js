import React from 'react';
import Typist from 'react-typist';
import '../../App.css';

export const Statement = () => { 
    return (
        <Typist>
            <h1 className="entrance-text">welcome to my website!</h1>
            <h2 className="entrance-text">my name is <span className='highlight-text'>Nick</span> and I love to code.</h2>
        </Typist>
    );
}

export default Statement;