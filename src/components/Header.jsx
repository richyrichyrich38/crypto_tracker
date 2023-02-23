import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

function Header() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  return (
    <header>
      <div className="d-flex justify-content-between align-items-center">
        <NavLink className="nav-link" to="/"><h3>CryptoVault</h3></NavLink>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/dashboard">Dashboard</NavLink>
                <NavLink className='nav-link' to="/about">About</NavLink>
                <NavLink className='nav-link'to="/contact">Contact</NavLink>
                <Button variant="outline-light" className="sign-in" onClick={handleSignInClick}>Sign In</Button>
                <Button variant="light" className='sign-up ms-3' onClick={handleSignUpClick}>Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <SignIn showModal={showSignInModal} setShowModal={setShowSignInModal} />
      <SignUp showModal={showSignUpModal} setShowModal={setShowSignUpModal} />
    </header>
  )
}

export default Header;