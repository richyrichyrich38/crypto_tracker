import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './pages/components/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Show from './pages/Show';
import showStore from './pages/showStore';

import Show from './pages/Show'



function App() {
    return (
        <div className='bodyContainer' id='bodyContainer'>
            <showStore />
            <Show />
            <Footer />
        </div>
    )
}

export default App;