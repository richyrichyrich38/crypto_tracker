import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Footer.css';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { FcHome, FcFeedback, FcCustomerSupport, FcPhoneAndroid, FcMindMap, FcAbout } from "react-icons/fc";

import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlScreenSmartphone } from "react-icons/sl";
function Footer() {
    // const a = { padding: '3px' };

    const classRemove = document.getElementById('footer');
    console.log(classRemove);

    const backgroundColour = {
        background: { "background": "#16161A" },
        TextColour: { "color": "#FFF" }
    }
    return (
        <footer style={backgroundColour.background} className='container-fluid'>


            <Row className='row  footerRows justify-content-md-center' id='footerRows' >
                {/*Breaking points: https://react-bootstrap.github.io/layout/breakpoints/ */}
                <ThemeProvider
                    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                    maxBreakpoint="md"
                >


                    <Col className='colDesign' md="4" >
                        <h4>CryptoVault</h4>
                        <p className='greyText'>Your one-stop destination for everything related to cryptocurrencies.</p>

                    </Col>
                    <Col className='colDesign hideInMobileScreen' md="2" >
                        <h5>Explore</h5>
                        <div className="p-0 mb-1" > <a href="#"><FcHome className='hideIcone' /> Home</a></div>
                        <div className="p-0 mb-1"> <a href="#"><FcMindMap className='hideIcone' />Dashboard</a></div>
                        <div className="p-0 mb-1"><a href="#"><FcAbout className='hideIcone' />about</a></div>
                    </Col>
                    <Col className='colDesign' md="3">
                        <h5>Business</h5>
                        <p className='showInMobileScreen'>Please feel free to contact us by completing the form or through any of the following:</p>
                        <p className="font-weight-normal p-0 mb-1"><FcFeedback className='hideIcone' />support@cryptovault.com</p>
                        <p className="font-weight-normal p-0 mb-1"><SlScreenSmartphone className='hideIcone' />+449999999999</p>
                    </Col>
                    <Col className='colDesign' md='2'>
                        <p className='showInMobileScreen'>In addition to our direct contact channels, you can also reach out to us through our social media platforms:</p>
                        <h5>Follow us</h5>
                        <p className="font-weight-normal p-0 mb-1"><a href="#"><SlSocialFacebook className='hideIcone' />Facebook</a></p>
                        <p className="font-weight-normal p-0 mb-1"><a href="#"><SlSocialInstagram className='hideIcone' />Instagram</a></p>
                        <p className="font-weight-normal p-0 mb-1"><a href="#"><SlSocialTwitter className='hideIcone' />Twitter</a></p>
                        <p className="font-weight-normal p-0 mb-1"><a href="#"><SlSocialLinkedin className='hideIcone' />LinkedIn</a></p>
                        <p></p>
                        <p className='showInMobileScreen'>Follow us for updates, news, and insights about the world of cryptocurrencies.</p>
                    </Col>
                </ThemeProvider>
            </Row>

            <Row className='copy-right'>
                <p className='text-justify'>© 2023 CryptoVault. All rights reserved.</p>
            </Row>


        </ footer >

    )
}

export default Footer; 