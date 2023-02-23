import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <hr className='mt-4'/>
            <Container id='footer' className="pt-4" fluid>
                <Container className="pt-4">
                    <Row className='d-flex justify-content-between'>
                        <Col lg={5} md={6} sm={12} className='mb-3'>
                            <Container>
                                <Row>
                                    <Col>
                                        <h4>CryptoVault</h4>
                                        <p>Your one-stop destination for everything related to cryptocurrencies.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg={7} md={6} sm={12}>
                            <Container>
                                <Row>
                                    <Col lg={3} md={12} sm={12} className='mb-3'>
                                        <h5>Explore</h5>
                                        <NavLink to="/"><p className='mb-2'>Home</p></NavLink>
                                        <NavLink to="/dashboard"><p className='mb-2'>Dashboard</p></NavLink>
                                        <NavLink to="/about"><p>About</p></NavLink>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} className='mb-3'>
                                        <h5>Business</h5>
                                        <div className='d-flex align-items-center mb-2'>
                                            <i className="fa-solid fa-envelope fa-xl" />
                                            <p className='ms-2 mt-2'>support@cryptovault.com</p>
                                        </div>
                                        <div className='d-flex align-items-center mb-2'>
                                            <i className="fa-solid fa-square-phone fa-xl" />
                                            <p className='ms-2 mt-2'>+449999999999</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={12} sm={12} className='mb-3'>
                                        <h5>Follow us</h5>
                                        <div className='d-flex flex-column'>
                                            <a href="https://www.facebook.com/"><p className='mb-2'>Facebook</p></a>
                                            <a href="https://www.instagram.com/"><p className='mb-2'>Instagram</p></a>
                                            <a href="https://twitter.com/"><p className='mb-2'>Twitter</p></a>
                                            <a href="https://www.linkedin.com/"><p>LinkedIn</p></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <p className="text-center copy-rights mt-2 mb-3">&copy; 2023 CryptoVault. All rights reserved.</p>
                </Container>
            </Container>
        </>
    );
}

export default Footer;