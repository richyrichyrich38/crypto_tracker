import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <header>
      <div className="d-flex justify-content-between align-items-center">
        <a className="nav-link" href="/"><h3>CryptoVault</h3></a>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link to="/about">About</Nav.Link>
                <Nav.Link to="/contact">Contact</Nav.Link>
                <Nav.Link to="/sign-in"><Button variant="outline-light" className='sign-in'>Sign In</Button></Nav.Link>
                <Nav.Link to="sign-up"><Button variant="light" className='sign-up'>Sign Up</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header;

