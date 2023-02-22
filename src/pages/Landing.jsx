import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';
import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

import Illustration from '../landing-illustration.png';


function Landing() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 760);
        };

        // add an event listener to update the state when the window is resized
        window.addEventListener('resize', handleResize);

        // remove the event listener on component
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Row id='landing' className={`d-flex align-items-center justify-content-evenly ${isSmallScreen ? 'flex-wrap' : ''}`}>
                <Col lg={7} md={6} className={`landing-content ${isSmallScreen ? 'order-last' : ''}`}>
                    <h1>Unlock the World of <span className="text-gradient">Cryptocurrencies</span></h1>
                    <p>Welcome to CryptoVault, your one-stop destination for everything related to cryptocurrencies.You can track the performance of various cryptocurrencies, including Bitcoin, Ethereum, and others, using our real-time charts and indicators.</p>
                    <form>
                        <input type="text" id="search" name="search" placeholder="Search 12,000+ tokens..." />
                        {/* <button type="submit">Go</button> */}
                    </form>
                </Col>
                <Col lg={5} md={6} className={`d-flex justify-content-center ${isSmallScreen ? 'order-first' : ''}`}>
                    <img src={Illustration} className='landing-img' alt='Crypto world floating up and down' />
                </Col>
            </Row>
            <Row>
                <Col className='socials d-flex justify-content-end'>
                    <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-facebook fa-xl" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram fa-xl" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-twitter fa-xl" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-xl" /></a>
                </Col>
            </Row>
        </>
    )
}

export default Landing;