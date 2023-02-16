import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Footer.css';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Footer() {
    // const a = { padding: '3px' };

    const backgroundColour = {
        background: { "background": "#16161A" },
        TextColour: { "color": "#FFF" }
    }
    return (
        <footer style={backgroundColour.background} className='container'>

            <Row className='row justify-content-md-center'>
                <Col className='col-4' >
                    <h5>CryptoVault</h5>

                    <p>Your one-stop destination for everything related to cryptocurrencies.</p>

                </Col>
                <Col className='col-2' >
                    <h5>Explore</h5>
                    <div class="p-0 mb-1" > <a href="#">Home</a></div>
                    <div class="p-0 mb-1"> <a href="#">Dashboard</a></div>
                    <div class="p-0 mb-1"><a href="#">about</a></div>
                </Col>
                <Col className='col-3'>
                    <h5>Business</h5>
                    <p class="font-weight-normal p-0 mb-1">support@cryptovault.com</p>
                    <p class="font-weight-normal p-0 mb-1">+449999999999</p>

                </Col>
                <Col className='col-2'>
                    <h5>Follow us</h5>
                    <p class="font-weight-normal p-0 mb-1"><a href="#">Facebook</a></p>
                    <p class="font-weight-normal p-0 mb-1"><a href="#">Instagram</a></p>
                    <p class="font-weight-normal p-0 mb-1"><a href="#">Twitter</a></p>
                    <p class="font-weight-normal p-0 mb-1"><a href="#">LinkedIn</a></p>

                </Col>
            </Row>

            <Row className='copy-right'>
                <p className='text-justify'>© 2023 CryptoVault. All rights reserved.</p>
            </Row>


        </ footer >

    )
}

export default Footer; 