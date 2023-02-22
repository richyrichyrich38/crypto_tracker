import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <hr className='mt-4'/>
            <Container id='footer' className="pt-4" fluid>
                <Container className="pt-4">
                    <Row className='d-flex justify-content-between'>
                        <Col lg={5} md={6} sm={12}>
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
                                    <Col lg={3} md={12} sm={12}>
                                        <h5>Explore</h5>
                                        <a href="/"><p>Home</p></a>
                                        <a href="/dashboard"><p>Dashboard</p></a>
                                        <a href="/about"><p>About</p></a>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <h5>Business</h5>
                                        <div className='d-flex align-items-center'>
                                            <i className="fa-solid fa-envelope fa-xl" />
                                            <p className='ms-2 mt-2'>support@cryptovault.com</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <i className="fa-solid fa-square-phone fa-xl" />
                                            <p className='ms-2 mt-2'>+449999999999</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={12} sm={12}>
                                        <h5>Follow us</h5>
                                        <div className='d-flex flex-column'>
                                            <a href="#"><p>Facebook</p></a>
                                            <a href="#"><p>Instagram</p></a>
                                            <a href="#"><p>Twitter</p></a>
                                            <a href="#"><p>LinkedIn</p></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <p className="text-center copy-rights">&copy; 2023 CryptoVault. All rights reserved.</p>
                </Container>
            </Container>
        </>
    );
}

export default Footer;