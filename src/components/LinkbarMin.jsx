import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "../components/css/Linkbarmin.module.css";
function LinkbarMin() {
  return (
    <Navbar
      className={styles.content}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">CryptoVault</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LinkbarMin;
