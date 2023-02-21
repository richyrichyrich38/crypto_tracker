import { Container } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import styles from "../components/css/Inputform.module.css";

const backGroundColor = {
  backgroundColor: "#1F1F1F",
};

function Inputform() {
  return (
    <Container>
        <Form className={styles.input}>
          <Form.Group className="mb-3">
            <Form.Control
              className={styles.Form}
              type="text"
              placeholder="Name"
              style={backGroundColor}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className={styles.Form}
              type="email"
              placeholder="Email"
              style={backGroundColor}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <FormGroup className="mb-3">
            <Form.Control
              className={styles.Form}
              placeholder="Message"
              style={backGroundColor}
              as="textarea"
              rows={8}
            />
          </FormGroup>

          <Button className={styles.btnSub}>
            Send
          </Button>
          <div className={styles.divider}></div>
        </Form>
     
    </Container>
  );
}

export default Inputform;