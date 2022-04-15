import React, { Component } from 'react';
import './Home.css';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import Gallery from '../Gallery/Gallery.js'
import production from '../../images/production.jpg'
import Products from '../Products/Products.js';
import bahrain from '../../images/bahrain.jpg'
import kuwait from '../../images/kuwait.jpg'
import qatar from '../../images/qatar.jpg'
import oman from '../../images/oman.jpg'
import vitenam from '../../images/vitenam.jpg'
import hongkong from '../../images/hongkong.jpg'
import butcher from '../../images/butcher.png'
import meat from '../../images/meat.png'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Story from '../Story/Story';

class Home extends Component {
    render() {
        return (
            <>
                <div className='homeMain'>

                    <section id='home'>

                        {/* Navbar Start */}
                        <div className='navMain'>
                            <Navbar className='navbar' fixed="top" collapseOnSelect expand="lg" variant="dark">
                                <Container>
                                    <Navbar.Brand href="#home">
                                        <img src={logo} className='logo' alt='logo' />
                                        <span className='companyName'>Snow King Frozen Foods</span>
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto"></Nav>
                                        <Nav>
                                            <Nav.Link href="#home">HOME</Nav.Link>
                                            <Nav.Link href="#ourbrands">OUR BRANDS</Nav.Link>
                                            <Nav.Link href="#products">PRODUCTS</Nav.Link>
                                            <Nav.Link href="#productin">PRODUCTION</Nav.Link>
                                            <Nav.Link href="#gallery">GALLERY</Nav.Link>
                                            <Nav.Link href="#about">ABOUT US</Nav.Link>
                                            <Nav.Link href="#contact">CONTACT US</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>

                        {/* Navbar End */}



                        {/* Carousel Start */}

                        <div className='carouselTop'>
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="sliderImg d-block w-100"
                                        src={slider1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="sliderImg d-block w-100"
                                        src={slider2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="sliderImg d-block w-100"
                                        src={slider3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>


                        {/* Carousel End */}
                    </section>


                   



                    {/* Quote Start */}

                    <div className='quoteMain'>
                        <div >
                            <h2 className='quote'>"Always give people more than what they expect to get."</h2>
                        </div>
                        <h5 className='introLine'>One of Pakistan's fastest-growing exporters of fresh and frozen chilled Halal beef.</h5>
                    </div>

                    {/* Quote End */}



                    {/* Products Start */}

                    <section id='products'>

                        <Products />

                    </section>

                    {/* Products End */}



                    {/* Production Process Start */}

                    <section id='productin'>
                        <div className='productionMain'>
                            <div>
                                <h1 className='productionHeading'>Production Process</h1>
                            </div>
                            <img
                                className="productionImg d-block w-100"
                                src={production}
                                alt="First slide"
                            />
                        </div>
                    </section>


                    {/* Production Process End */}



                    {/* Story Start */}
                    <Story />

                    {/* Story End */}



                    {/* About Us Start */}

                    <section id='about'>

                        <div className='aboutMain'>
                            <div className='aboutBox'>
                                <div className='aboutText'>
                                    <h3 className='aboutTextHeading'>
                                        Vision
                                    </h3>
                                    <p className='aboutTextPara'>
                                        Research to explore, better ideas by using advanced technology in the field of livestock
                                        slaughtering and meat preparation. Provide quality and nourishment for our valued customers.
                                    </p>
                                    <h3 className='aboutTextHeading'>
                                        Mission Statement
                                    </h3>
                                    <p className='aboutTextPara'>
                                        SKFF is committed to provide the best quality meat, both frozen and chilled and striving for
                                        the customer satisfaction through in time delivery as per given specification.
                                    </p>
                                    <h3 className='aboutTextHeading'>
                                        Our Values
                                    </h3>
                                    <ul className='aboutTextPara'>
                                        <li>Implementation of Islamic Shariah &#39; h Regulations in Livestock Slaughtering.</li>
                                        <li>Striving for customer satisfaction.</li>
                                        <li>Quality Management of services.</li>
                                        <li>Strong Teamwork.</li>
                                        <li>Creativity and Innovation.</li>
                                        <li>Strong Chain.</li>
                                    </ul>
                                    <h3 className='aboutTextHeading'>
                                        Leadership and Governance
                                    </h3>
                                    <p className='aboutTextPara'>
                                        Snow King Frozen Foods enjoys a prestigious name in the SlaughterHouse Industry. SKFF is led by qualified,
                                        motivated and remarkably passionate professionals. Each department closely followed the mission and vision
                                        of the Snow King Frozen Foods.
                                    </p>
                                </div>
                                <div className='aboutImg'>
                                    <img
                                        className="w-100 d-block"
                                        src={butcher}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className='clienteleMain'>
                            <div>
                                <h1 className='productionHeading'>clientele</h1>
                                <p className='clienteleLine'>We have significant clientele in the following regions worldwide:</p>
                            </div>
                            <div className='flagMargin'>
                                <div className='flagsMain'>
                                    <div className='flag'>
                                        <img
                                            className="flagImg d-block"
                                            src={bahrain}
                                            alt="First slide"
                                        />
                                        <span>Bahrain</span>
                                    </div>
                                    <div className='flag'>
                                        <img
                                            className="flagImg d-block"
                                            src={kuwait}
                                            alt="First slide"
                                        />
                                        <span>Kuwait</span>
                                    </div>
                                    <div className='flag'>
                                        <img
                                            className="flagImg d-block"
                                            src={oman}
                                            alt="First slide"
                                        />
                                        <span>Oman</span>
                                    </div>
                                    <div className='flag'>
                                        <img
                                            className="flagImg d-block"
                                            src={qatar}
                                            alt="First slide"
                                        />
                                        <span>Qatar</span>
                                    </div>
                                    <div className='flag'>
                                        <img
                                            className="flagImg d-block"
                                            src={vitenam}
                                            alt="First slide"
                                        />
                                        <span>Vitenam</span>
                                    </div>
                                    <div className='flag'>
                                        <img
                                            className="flagImg d-block"
                                            src={hongkong}
                                            alt="First slide"
                                        />
                                        <span>Hong Kong</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='aboutMain'>
                            <div className='aboutBox'>
                                <div className='aboutImg'>
                                    <img
                                        className="w-100 d-block"
                                        src={meat}
                                        alt="First slide"
                                    />
                                </div>
                                <div className='aboutText'>
                                    <h2 className='aboutTextHeading'>Our Core Values</h2>
                                    <p className='aboutTextPara'>
                                        Our core values comprise of the following four pillars which ensure our growth and lead us to the path of success.
                                    </p>
                                    <ul>
                                        <li>
                                            <h4 className='aboutTextHeading'>Integrity</h4>
                                            <p className='aboutTextPara'>
                                                <span style={{ fontWeight: 600 }}>Customer Satisfaction.</span>
                                                <br />
                                                Contribute to supporting a family oriented work environment founded on trust, honesty, transparency, with open communication and fair dealing.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='aboutTextHeading'>Respect</h4>
                                            <p className='aboutTextPara'>
                                                <span style={{ fontWeight: 600 }}>We value people as our valuable asset.</span>
                                                <br />
                                                Value and treat others as we would want others to treat/value us.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='aboutTextHeading'>Teamwork</h4>
                                            <p className='aboutTextPara'>
                                                <span style={{ fontWeight: 600 }}>To own the business and work for mutual benefits of the company and individual.</span>
                                                <br />
                                                Work effectively with each other to achieve organizational goals with a helping and a positive attitude.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='aboutTextHeading'>Accountability</h4>
                                            <p className='aboutTextPara'>
                                                <span style={{ fontWeight: 600 }}>To deliver excellence in results with commitment to all stakeholders.</span>
                                                <br />
                                                Take responsibility for the success of business marked by continuous development whilst achieving shareholders objectives.
                                            </p></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* About Us End */}





                    {/* Gallery Start */}

                    <section id='gallery'>
                        <div className='galleryMain'>
                            <h2 className='galleryHeading'>Gallery</h2>
                            <Gallery />
                        </div>

                    </section>
                    {/* Gallery End */}




                    {/* Contact Start */}

                    <Contact />

                    {/* Contact End */}



                </div >
                <Footer />
            </>

        )
    }
}

export default Home;



// EC2229