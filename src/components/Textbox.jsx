import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../components/css/Textbox.module.css";
import TextWithIcon from "./Textboxwithicon";
import Icons from "./Icons";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";



function Textbox() {
  return (
    <Container>
      <Row>
        <div>
          <h1 className={styles.title}>
            Get in Touch with{" "}
            <span className={styles.span}>CryptoVault Team</span>
          </h1>

          <div className={styles.text}>
            <div className={styles.upperText}>
              <p>
                At CryptoVault, we value your inquiries and feedback, and we are
                committed to providing you with timely and helpful responses to
                any questions or concerns you may have.
              </p>
            </div>

            <div className={styles.lowerText}>
              <p>
                Please feel free to contact us by completing the form or through
                any of the following:
              </p>
              <TextWithIcon />
              <p>
                In addition to our direct contact channels, you can also reach
                out to us through our social media platforms:
              </p>
              <Icons />
              <p>
                Follow us for updates, news, and insights about the world of
                cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Textbox;
