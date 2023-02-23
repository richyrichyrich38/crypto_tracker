import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import From from '../components/Form';


const Contact = () => {
    return (
        <Container className='mt-4'>
            <h1 className='mb-4'>Get in Touch with <span className='text-gradient'>CryptoVault Team</span></h1>
            <p className='mb-4'>At CryptoVault, we value your inquiries and feedback, and we are committed to providing you with timely and helpful responses to any questions or concerns you may have.</p>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <p className='my-2'>Please feel free to contact us by completing the form or through any of the following:</p>
                        <div>
                            <div className='d-flex align-items-center'>
                                <i className="fa-solid fa-envelope fa-xl" />
                                <p className='ms-2 mt-2'>support@cryptovault.com</p>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <i className="fa-solid fa-square-phone fa-xl" />
                                <p className='ms-2 mt-2'>+449999999999</p>
                            </div>
                        </div>
                        <p className='my-2'>In addition to our direct contact channels, you can also reach out to us through our social media platforms:</p>
                        <div className='socials d-flex mb-3'>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook fa-xl" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram fa-xl" /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-twitter fa-xl" /></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-xl" /></a>
                        </div>
                        <p className='my-2'>Follow us for updates, news, and insights about the world of cryptocurrencies.</p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <From />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
