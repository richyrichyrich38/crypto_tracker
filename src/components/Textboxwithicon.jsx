import styles from "../components/css/TextWithIcon.module.css";

function TextWithIcon() {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <i className="fa-solid fa-envelope"></i>
        <p>support@cryptovault.com</p>
      </div>

      <div className={styles.text}>
        <i className="fa-solid fa-mobile"></i>
        <p>+449999999999</p>
      </div>
    </div>
  );
}
export default TextWithIcon;
