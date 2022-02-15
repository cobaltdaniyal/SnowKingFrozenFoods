import React, { Component } from 'react';
import './Products.css';
import { Carousel, Card } from 'react-bootstrap';
import product1 from '../../images/product1.jpeg'
import product2 from '../../images/product2.jpg'
import product3 from '../../images/product3.jpg'
import product4 from '../../images/product4.jpg'





class Products extends Component {
    render() {
        return (
            <div className='productsMain'>
                <Carousel className='carouselMain'>
                    <Carousel.Item>
                        <div className='indivisualProductsMain'>
                            <div className='indivisualProducts'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Beef Boneless</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product2} />
                                    <Card.Body>
                                        <Card.Title>Beef Bone In</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product3} />
                                    <Card.Body>
                                        <Card.Title>Beef Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product4} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='indivisualProductsMain'>
                            <div className='indivisualProducts'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Beef Boneless</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product2} />
                                    <Card.Body>
                                        <Card.Title>Beef Bone In</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product3} />
                                    <Card.Body>
                                        <Card.Title>Beef Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product4} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='indivisualProductsMain'>
                            <div className='indivisualProducts'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Beef Boneless</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product2} />
                                    <Card.Body>
                                        <Card.Title>Beef Bone In</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product3} />
                                    <Card.Body>
                                        <Card.Title>Beef Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product4} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='indivisualProductsMain'>
                            <div className='indivisualProducts'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Beef Boneless</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product2} />
                                    <Card.Body>
                                        <Card.Title>Beef Bone In</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product3} />
                                    <Card.Body>
                                        <Card.Title>Beef Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product4} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product1} />
                                    <Card.Body>
                                        <Card.Title>Mutton Carcass</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}


export default Products;


