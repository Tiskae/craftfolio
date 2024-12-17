import styles from "./Projects.module.scss";

type ProjectsProps = {
  pass?: boolean;
};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className={styles.projects}>
      <h2 className="heading2">Projects</h2>
    </section>
  );
};

export default Projects;
