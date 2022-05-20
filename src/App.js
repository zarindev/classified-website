import React from 'react';
import { HeaderContact, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <HeaderContact />
            <Navbar/>
        </div>
        <div className='main'></div>
        <div className='footer'></div>
    </div>
  );
}

export default App