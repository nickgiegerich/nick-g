import React from 'react';
import Typist from 'react-typist';
import '../../App.css';

export const Statement = () => { 
    return (
        <div>
        <Typist>
            <h1 className="entrance-text pt-5 pb-5" style={{fontSize: '2.1rem'}}> &lt;<span className='highlight-text'>NickGiegerich</span>/&gt; </h1>
        </Typist>
        </div>
    );
}

export default Statement;