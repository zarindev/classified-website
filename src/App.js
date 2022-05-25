import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Homepage/>
        </div>
        <div className='main'></div>
        <div className='footer'></div>
    </div>
  );
}

export default App