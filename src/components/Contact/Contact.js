import React, { useState } from 'react';
import './Contact.css';
import { Form, Row, Button, Col, FloatingLabel } from 'react-bootstrap';





const Contact = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        city: '',
        country: '',
        message: '',
    });



    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value })
    }

    const submitData = async (e) => {
        e.preventDefault();
        const { name, email, city, country, message } = userData;
        if (name && email && city && country && message) {


            const res = fetch(
                'https://snowkingfrozenfoods-default-rtdb.firebaseio.com/userData.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        city,
                        country,
                        message
                    })
                }
            )
            if (res) {
                setUserData({
                    name: '',
                    email: '',
                    city: '',
                    country: '',
                    message: '',
                })
                alert("DATA STORED");
            } else {
                alert("ERROR")
            }
        } else {
            alert("please fill all the details")
        }
    }


    return (
        <>
            <section id='contact'>

                <div className='contactMain'>
                    <div className='contactHeadingMain'>
                        <h2 className='contactHeading'>Contact Us</h2>
                    </div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Type your name here"
                                    name="name"
                                    value={userData.name}
                                    onChange={postUserData}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Type your email here"
                                    name="email"
                                    value={userData.email}
                                    onChange={postUserData}
                                />
                            </Form.Group>
                        </Row>

                        <Form.Label>Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea" label="Leave your message here" className="mb-3">
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={userData.message}
                                onChange={postUserData}
                            />
                        </FloatingLabel>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    placeholder="Type your city name"
                                    name="city"
                                    value={userData.city}
                                    onChange={postUserData}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Country / State</Form.Label>
                                <Form.Control
                                    placeholder="Type your country or state name"
                                    name="country"
                                    value={userData.country}
                                    onChange={postUserData}
                                />
                            </Form.Group>

                        </Row>


                        <Button variant="primary" type="submit" onClick={submitData}>
                            Submit
                        </Button>
                    </Form>
                </div>

            </section>
        </>
    )
}



export default Contact;


