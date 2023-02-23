import './show.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/Header'


function Show() {
  const store = showStore()
  const params = useParams()


  React.useEffect(() => {
    // console.log(params);
    store.fetchData(params.id)
  }, []);

  // if(!store.data) return <></>

  return (
    <>
      <Header />
      <Container className='mt-4'>
        <Card>
          <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
              {store.dataRes && (
                <div className='d-flex align-items-center'>
                  <img className='store-img' src={store.dataRes.data.image.large} alt='Crypto icon.' />
                  <div className='d-flex flex-column ms-3'>
                    <h3>
                      {store.dataRes.data.name}
                    </h3>
                    <h4>({store.dataRes.data.symbol})</h4>
                  </div>
                </div>
              )}
              <div className='d-flex'>
                {store.dataRes && (
                  <div className='d-flex flex-column align-items-end me-4'>
                    <h6>Market Cap Rank</h6>
                    <p>{store.dataRes.data.market_cap_rank}</p>
                  </div>
                )}
                {store.dataRes && (
                  <div className='d-flex flex-column align-items-end'>
                    <h6>Current Price</h6>
                    <p>${store.dataRes.data.market_data.current_price.usd.toFixed(3)}</p>
                  </div>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
        <Row className='d-flex align-items-start mt-4'>
          <Col lg={6} md={12} sm={12} className='mt-4'>
            <AreaChart
              width={500}
              height={400}
              data={store.graphData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </Col>
          <Col lg={6} md={12} sm={12}>
            {store.dataRes && (
              <div>
                <h4>Description</h4>
                <p>{store.dataRes.data.description.en}</p>
              </div>
            )}
            <Row className='mt-4'>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div>
                    {store.dataRes && (
                      <div>
                        <h6>24h Percentage Price Change</h6>
                        <p>{store.dataRes.data.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                      </div>
                    )}

                    {store.dataRes && (
                      <div>
                        <h6>24h Low</h6>
                        <p>${store.dataRes.data.market_data.low_24h.usd.toFixed(3)}</p>
                      </div>
                    )}

                    {store.dataRes && (
                      <div>
                        <h6>Circulating Supply</h6>
                        <p>{store.dataRes.data.market_data.circulating_supply.toFixed(0)} tokens</p>
                      </div>
                    )}
                  </div>
                  <div>
                    {store.dataRes && (
                      <div>
                        <h6>24h Price Change USD</h6>
                        <p>${store.dataRes.data.market_data.price_change_24h_in_currency.usd.toFixed(3)}</p>
                      </div>
                    )}

                    {store.dataRes && (
                      <div>
                        <h6>24h High</h6>
                        <p>${store.dataRes.data.market_data.high_24h.usd.toFixed(3)}</p>
                      </div>
                    )}

                    {store.dataRes && (
                      <div>
                        <h6>1y Percentage Change</h6>
                        <p>
                          {store.dataRes.data.market_data.price_change_percentage_1y.toFixed(2)}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Show