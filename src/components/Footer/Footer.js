import React, { Component } from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';





class Footer extends Component {
    render() {
        return (
            <div className='footerMain'>
                <Navbar className='navbarFooter' variant="dark">
                    <Container>
                        <img src={logo} className='logoFooter' alt='logo' />
                        <span className='companyNameFooter'>Snow King Frozen Foods</span>
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <span className='rightsFooter'>Copyright © 2022 SNOW KING FROZEN FOODS (Pvt.) Ltd. All rights reserved.</span>
                            {/* <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#ourbrands">OUR BRANDS</Nav.Link>
                            <Nav.Link href="#products">PRODUCTS</Nav.Link>
                            <Nav.Link href="#productin">PRODUCTION</Nav.Link>
                            <Nav.Link href="#gallery">GALLERY</Nav.Link>
                            <Nav.Link href="#about">ABOUT US</Nav.Link>
                            <Nav.Link href="#contact">CONTACT US</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        )
    }
}


export default Footer;