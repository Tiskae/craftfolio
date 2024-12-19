import styles from "./Educations.module.scss";

const Educations: React.FC = () => {
  return (
    <section className={styles.educations}>
      <h2 className="heading2">Education and Certifications</h2>
      <div className={styles.education}>
        <h3 className="heading4">Education</h3>
      </div>

      <div className={styles.certifications}>
        <h3 className="heading4">Certifications</h3>
      </div>
    </section>
  );
};

export default Educations;
