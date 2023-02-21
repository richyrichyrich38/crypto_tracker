import './modals.css';

import React from 'react';

import Container from 'react-bootstrap/Container';
import { Modal, Form, Button } from 'react-bootstrap';

function SignIn(props) {
  const handleClose = () => props.setShowModal(false);

  return (
    <Container fluid className="d-flex align-items-center">
      <Modal centered className='signin-modal' show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-end'>
          <Button className='signin-btn' variant="light" type="submit">Sign In</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SignIn;
