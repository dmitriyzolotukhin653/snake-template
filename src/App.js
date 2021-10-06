import React from 'react'
import './App.css';

const App = () => {
    return (
        <div>
            <div className='cell'/>
            <div className='cell snake'/>
            <div className='cell food'/>
            <div className='arrow selected'/>
        </div>
    );
}


export default App;
