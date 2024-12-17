import clsx from "clsx";
import styles from "./Skills.module.scss";

type SkillsProps = {
  pass?: boolean;
};

type SkillBoxProps = {
  skillName: string;
};

const SkillBox: React.FC<SkillBoxProps> = ({ skillName }) => {
  return (
    <div className={styles.skillbox}>
      <h3 className={styles.skillbox__text}>{skillName}</h3>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = () => {
  const skills: string[] = [
    "HTML",
    "CSS",
    "SASS/SCSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Node.js",
    "Golang",
    "MongoDB",
    "Git",
  ];

  return (
    <section className={styles.skills}>
      <h2 className={clsx(styles.skills__heading, "heading2")}>Tools I Work With</h2>
      <div className={styles.skills__list}>
        {skills.map((skill, idx) => (
          <SkillBox key={idx} skillName={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
