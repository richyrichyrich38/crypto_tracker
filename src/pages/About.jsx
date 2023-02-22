import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import React from 'react';
import AboutIllustration from '../about-illustration.png';
import MarketData from '../market-updates.png';
import Assets from '../assets.png';
import Support from '../support.png';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-4'>
            <Row id='about' className='d-flex align-items-center justify-content-center my-4 mx-4'>
                <Col lg={6} md={12} sm={12} className='d-flex justify-content-center'>
                    <img src={AboutIllustration} className='about-img' alt='Crypto illustration' />
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <h1 className='my-4'>Learn more about <span className="text-gradient">us</span></h1>
                    <p className='mb-4'>Our mission is to provide a platform for users to learn, invest, and trade digital assets.</p>
                    <p className='mb-4'>We strive to make the process of buying, selling, and exchanging cryptocurrencies as accessible and straightforward as possible. Our platform provides real-time updates and charts to help you stay on top of the latest market trends and make informed investment decisions.</p>
                    <p className='mb-4'>Our platform is constantly evolving, and we strive to provide the best possible user experience. We take feedback seriously and are committed to improving our services based on your suggestions.</p>
                    <p>Join us today and experience the benefits of investing in digital assets. Our friendly customer support team is always available to answer your questions and help you get started on your journey.</p>
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <Container className='feature-card'>
                        <img className='feature-img' src={MarketData} alt='...' />
                        <h4 className='my-2'>Real-time Market Data</h4>
                        <p>We provide real-time updates on market trends and prices for all digital assets listed on our platform. You can view live price charts to get the most up-to-date information.</p>
                    </Container>
                </Col>
                <Col>
                    <Container className='feature-card'>
                        <img className='feature-img' src={Assets} alt='...' />
                        <h4 className='my-2'>Diverse Digital Assets</h4>
                        <p>We offer a diverse range of digital assets to trade. With our platform, you can diversify your portfolio and take advantage of new investment opportunities, helping you reach your financial goals.</p>
                    </Container>
                </Col>
                <Col>
                    <Container className='feature-card'>
                        <img className='feature-img' src={Support} alt='...' />
                        <h4 className='my-2'>24/7 Support</h4>
                        <p>Get reliable and responsive support from our friendly and knowledgeable support team, available 24/7 to help you with any questions or issues you may encounter.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default About;

