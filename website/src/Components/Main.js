import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import All from './All';
import Asia from './Asia';
import Europe from './Europe';
import HomePage from './HomePage';

function Main() {
    const location = useLocation();

    return (
        <>
            <div className='container'>
                    <div>
                        {(location.pathname === '/home' || location.pathname === '/asia' || location.pathname === '/europe') && <NavBar />}
                        <Routes>
                            <Route path="/home" element={<All />} />
                            <Route index path="/" element={<HomePage />} />
                            <Route path="/asia" element={<Asia />} />
                            <Route path="/europe" element={<Europe />} />
                        </Routes>
                        {(location.pathname === '/home' || location.pathname === '/asia' || location.pathname === '/europe') && <Footer />}
                        
                    </div>
            </div>
        </>
    )
}

export default function AppWrapper() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }