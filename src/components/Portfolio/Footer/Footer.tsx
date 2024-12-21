import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Designed and built by <a href="https://tiskae.netlify.app">Tiskae</a>
      </p>
    </footer>
  );
};

export default Footer;
