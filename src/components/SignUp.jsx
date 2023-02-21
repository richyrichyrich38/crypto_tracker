import './modals.css';

import React from 'react';

// import Container from 'react-bootstrap/Container';
import { Modal, Form, Button } from 'react-bootstrap';

function SignUp(props) {
    const handleClose = () => props.setShowModal(false);

    return (
        <Modal centered className='signup-modal' show={props.showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end'>
                <Button className='signup-btn mt-3' variant="light" type="submit">Sign Up</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignUp;