import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkbarMin from "./LinkbarMin";

import styles from "../components/css/Linkbar.module.css";

function Linkbar() {
  return (
    <div>
      <LinkbarMin />
      <Navbar className={styles.Linkbar}>
        <Navbar.Brand className={styles.navtitle} href="#home">
          CryptoVault
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link className={styles.navlink} href="#home">
            Home
          </Nav.Link>
          <Nav.Link className={styles.navlink} href="#Dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link className={styles.navlink} href="#About">
            About
          </Nav.Link>
          <Nav.Link className={styles.navlink} href="#Contact">
            Contact
          </Nav.Link>
        </Nav>

        <Button className={styles.btn1} variant="outline-primary">
          Log In
        </Button>
        <Button className={styles.btn2}>Sign Up</Button>
      </Navbar>
    </div>
  );
}

export default Linkbar;
