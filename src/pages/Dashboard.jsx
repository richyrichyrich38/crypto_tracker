import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import React, { useEffect } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import homeStore from '../stores/homeStore';
import { Link } from 'react-router-dom';
import Bitcoin from '../bitcoin.png';

function Dashboard() {
    // For crypto cards
    const store = homeStore();

    useEffect(() => {
        store.fetchCoins()
    }, []);

    return (
        <Container id='dashboard' className='mt-4'>
            <Container>
                <h3 className='mb-4'>Stay Ahead of the <span className='text-gradient'>Crypto Game</span></h3>
                <p className='dashboard-intro'>We understand that navigating the ever-changing cryptocurrency market can be overwhelming, which is why we offer a range of tools to help. Our dashboard page is just one of these tools, providing you with the latest insights and trends in the cryptocurrency world, so that you can quickly assess the market and make informed decisions about your investments.</p>
            </Container>
            <Row className='my-4'>
                <Col lg={6} md={5} sm={12}>
                    <Container>
                        <h3 className='dashboard-header'>Trending</h3>
                        <a href='#overview'>
                            <Card>
                                <Card.Body>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img className='crypto-icon' src='https://cdn-icons-png.flaticon.com/512/5968/5968260.png' alt='crypto' />
                                            <div className="crypto-name d-flex flex-column">
                                                <h4 className='mb-2'>BTC</h4>
                                                <p>Bitcoin</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </a>

                        {store.coins.slice(0, 4).map(coin => {
                            return (
                                <div key={coin.id} className="trending-list mt-2">
                                    <Link to={`/${coin.id}`}>
                                        <Card>
                                            <Card.Body>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <img className='crypto-icon' src={coin.image} alt='Crypto icon.' />
                                                        <div className="crypto-name d-flex flex-column">
                                                            <h4 className='mb-2'>{coin.name}</h4>
                                                            <p>{coin.symbol}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })}
                    </Container>
                </Col>
                <Col lg={6} md={7} sm={12}>
                    <Container id='overview'>
                        <h3 className='dashboard-header'>Overview</h3>
                        <Container className='graph-container'>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <img className='crypto-icon' src='https://cdn-icons-png.flaticon.com/512/5968/5968260.png' alt='crypto' />
                                    <div className="crypto-name d-flex flex-column">
                                        <h4 className='mb-2'>BTC</h4>
                                        <p>Bitcoin</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-end'>
                                    <p className='mb-2'>$ 21970.90</p>
                                    <p>- 61.24(-0.28%)</p>
                                </div>
                            </div>
                            <hr />
                            <h6 className='mb-3'>Performance over the last week</h6>
                            <div className='d-flex justify-content-center'>
                            <img src={Bitcoin} alt="Bitcoin graph." width="350px" />
                            </div>
                            <div className='d-flex flex-column align-items-end'>
                                <p className='graph-note'>The data shown above is for indicative purposes only and is subject to change. The actual execution price may differ. Please note that past performance is not necessarily indicative of future performance.</p>
                                <div>
                                    <Button variant="outline-light" className='sell'>Sell</Button>
                                    <Button variant="light" className='buy'>Buy</Button>
                                </div>
                            </div>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;