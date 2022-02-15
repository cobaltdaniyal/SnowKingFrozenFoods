import React, { Component } from 'react';
import './Contact.css';
import { Form, Row, Button, Col, FloatingLabel } from 'react-bootstrap';





class Contact extends Component {
    render() {
        return (
            <section id='contact'>

                <div className='contactMain'>
                    <div className='contactHeadingMain'>
                        <h2 className='contactHeading'>Contact Us</h2>
                    </div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Type your name here" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Type your email here" />
                            </Form.Group>
                        </Row>

                        <Form.Label>Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea" label="Leave your message here" className="mb-3">
                            <Form.Control as="textarea" />
                        </FloatingLabel>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Type your city name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </section>
        )
    }
}


export default Contact;


