import React from "react";
import { Container } from "react-bootstrap";
import styles from "../components/css/Page.module.css";
import Inputform from "../components/Inputform"
import Textbox from "../components/Textbox";
import Linkbar from "../components/Linkbar";

import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div>
      <Linkbar />
      <Container className={styles.content}>
        <Textbox />
        <Inputform />
      </Container>
    </div>
  );
}
export default Contact;
