import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../components/css/Page.module.css";
import Inputform from "../components/Inputform"
import Textbox from "../components/Textbox";
import Linkbar from "../components/Linkbar";

import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div>
      <Linkbar />
      <div className={styles.content}>
        <Textbox />
        <Inputform/>
      </div>
    </div>
  );
}
export default Contact;
