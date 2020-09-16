import React from 'react';
import Typist from 'react-typist';
import '../../App.css';

export const Statement = () => { 
    const x = 1;
    return (
        <Typist>
            <h1 className="entrance-text">SELECT <span className="wildcard">*</span> FROM</h1>
        </Typist>
    );
}

export default Statement;