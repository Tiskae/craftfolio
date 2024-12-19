import styles from "./Education.module.scss";
import Image from "next/image";
import IconSchool from "../../../../../public/icons/graduation-cap.svg";

export type EducationProps = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  grade: string;
  actsAndSocieties: string[];
};

const Education: React.FC<EducationProps> = (props) => {
  return (
    <div className={styles.education}>
      <Image className={styles.education__icon} src={IconSchool} alt="school icon" />
      <div className={styles.education__content}>
        <h4 className="heading4">{props.school}</h4>
        <p className={styles.education__course}>
          {props.degree} - {props.fieldOfStudy}
        </p>
        <p className={styles.education__date}>
          {new Date(props.startDate).toDateString()} - {new Date(props.endDate).toDateString()}
        </p>
        <p className={styles.education__acts}>Activities and Societies: {props.actsAndSocieties.join(" · ")}</p>
      </div>
    </div>
  );
};

export default Education;
