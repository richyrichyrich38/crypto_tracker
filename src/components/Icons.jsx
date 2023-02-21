import styles from "../components/css/Icons.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Icons() {
  return (
    <div className={styles.content}>
      <i className="fa-brands fa-square-facebook" />
      <i className="fa-brands fa-square-instagram" />
      <i className="fa-brands fa-square-twitter" />
      <i className="fa-brands fa-linkedin" />
    </div>
  );
}

export default Icons;
