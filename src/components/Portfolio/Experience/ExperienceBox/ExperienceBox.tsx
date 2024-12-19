import styles from "./ExperienceBox.module.scss";
import Image from "next/image";
import IconSuitcase from "../../../../../public/icons/suitcase.svg";

export type ExperienceProps = {
  jobtitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: { type: "Onsite" | "Hybrid" | "Remote"; place: string };
  employmentType: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  skills: string[];
};

const ExperienceBox: React.FC<ExperienceProps> = (props) => {
  return (
    <div className={styles.experiencebox}>
      <Image className={styles.experiencebox__icon} src={IconSuitcase} alt="work icon" />
      <div className={styles.experiencebox__content}>
        <h3 className="heading3">{props.jobtitle}</h3>
        <p className={styles.experience__company}>
          <span>
            {props.company} · {props.employmentType}
          </span>
        </p>
        <p className={styles.experience__date}>
          {new Date(props.startDate).toDateString()} - {new Date(props.endDate).toDateString()} · {"2 yrs 7 mos"}
        </p>
        <p className={styles.experience__location}>
          {props.location.place} · {props.location.type}
        </p>
        <p className={styles.experience__desc}>{props.description}</p>
        <p className={styles.experience__skills}>
          <strong>Skills: </strong>
          {props.skills.join(" · ")}
        </p>
      </div>
    </div>
  );
};

export default ExperienceBox;
