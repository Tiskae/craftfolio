import Education, { EducationProps } from "./Education/Education";
import styles from "./Educations.module.scss";

const Educations: React.FC = () => {
  const educations: EducationProps[] = [
    {
      school: "Obafemi Awolowo University",
      degree: "Bachelor of Science (B.Sc.)",
      fieldOfStudy: "Geology",
      startDate: new Date(),
      endDate: new Date(),
      grade: "4.68 / 5.00",
      actsAndSocieties: [
        "Nigerian Association of Petroleum Explorationists (NAPE)",
        "Nigerian Mining and Geoscience Society (NMGS)",
        "Society of Petroleum Explorationists (SPE)",
        "Ife Geoscience Students Society (IFEGSS)",
      ],
    },
  ];

  return (
    <section className={styles.educations}>
      <h2 className="heading2">Educations</h2>
      <div className={styles.educations__list}>
        {educations.map((e, idx) => (
          <Education
            key={idx}
            school={e.school}
            degree={e.degree}
            fieldOfStudy={e.fieldOfStudy}
            startDate={e.startDate}
            endDate={e.endDate}
            grade={e.grade}
            actsAndSocieties={e.actsAndSocieties}
          />
        ))}
      </div>
    </section>
  );
};

export default Educations;
