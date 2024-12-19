import Image from "next/image";
import styles from "./Project.module.scss";

export type ProjectProps = {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  toolsUsed: string[];
};

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className={styles.project}>
      <Image
        src={props.imageUrl}
        alt={props.title}
        width={250}
        height={200}
        style={{ objectFit: "contain", backgroundColor: "#fff" }}
      />
      <div className={styles.project__content}>
        <h3 className="heading3">{props.title}</h3>
        <p>{props.description}</p>
        <div className={styles.project__tools}>
          {props.toolsUsed.map((t, idx) => (
            <span key={idx} className={styles.project__tool}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
