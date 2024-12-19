import styles from "./Experience.module.scss";
import ExperienceBox, { ExperienceProps } from "./ExperienceBox/ExperienceBox";

const Experience: React.FC = () => {
  // prettier-ignore
  const experiences: ExperienceProps[] = [
    {
      company: "FitSit",
      jobtitle: "Frontend Web Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: `- Led frontend development using React and SASS, implementing authentication, security, and state management with Redux. Improved user experience by overhauling >90% of the UI/UX codebase for reliability and cross-browser consistency.

                    - Coordinated effectively with backend, cloud, and design teams within an AGILE methodology while working fully remote. Successfully added translations using i18next to support 4 languages, handled error and socket connection.

                    - Spearheaded enhancements to the frontend codebase at FitSit as a Lead Developer, tuning every other aspect of frontend development to improve the speed and overall functionality of the website.
`,
      location: { place: "Prague, Czech", type: "Remote" },
      employmentType: "Part-time",
      skills: ["JavaScript", "CSS", "React.js", "Redux.js", "Node.js", "SASS", "HTML", "Websockets", "Search Engine Optimization (SEO)",],
    },
    {
      company: "FitSit",
      jobtitle: "Frontend Web Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: `- Led frontend development using React and SASS, implementing authentication, security, and state management with Redux. Improved user experience by overhauling >90% of the UI/UX codebase for reliability and cross-browser consistency.

                    - Coordinated effectively with backend, cloud, and design teams within an AGILE methodology while working fully remote. Successfully added translations using i18next to support 4 languages, handled error and socket connection.

                    - Spearheaded enhancements to the frontend codebase at FitSit as a Lead Developer, tuning every other aspect of frontend development to improve the speed and overall functionality of the website.
`,
      location: { place: "Prague, Czech", type: "Remote" },
      employmentType: "Part-time",
      skills: ["JavaScript", "CSS", "React.js", "Redux.js", "Node.js", "SASS", "HTML", "Websockets", "Search Engine Optimization (SEO)",],
    },
    {
      company: "FitSit",
      jobtitle: "Frontend Web Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: `- Led frontend development using React and SASS, implementing authentication, security, and state management with Redux. Improved user experience by overhauling >90% of the UI/UX codebase for reliability and cross-browser consistency.

                    - Coordinated effectively with backend, cloud, and design teams within an AGILE methodology while working fully remote. Successfully added translations using i18next to support 4 languages, handled error and socket connection.

                    - Spearheaded enhancements to the frontend codebase at FitSit as a Lead Developer, tuning every other aspect of frontend development to improve the speed and overall functionality of the website.
`,
      location: { place: "Prague, Czech", type: "Remote" },
      employmentType: "Part-time",
      skills: ["JavaScript", "CSS", "React.js", "Redux.js", "Node.js", "SASS", "HTML", "Websockets", "Search Engine Optimization (SEO)",],
    },
    {
      company: "FitSit",
      jobtitle: "Frontend Web Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: `- Led frontend development using React and SASS, implementing authentication, security, and state management with Redux. Improved user experience by overhauling >90% of the UI/UX codebase for reliability and cross-browser consistency.

                    - Coordinated effectively with backend, cloud, and design teams within an AGILE methodology while working fully remote. Successfully added translations using i18next to support 4 languages, handled error and socket connection.

                    - Spearheaded enhancements to the frontend codebase at FitSit as a Lead Developer, tuning every other aspect of frontend development to improve the speed and overall functionality of the website.
`,
      location: { place: "Prague, Czech", type: "Remote" },
      employmentType: "Part-time",
      skills: ["JavaScript", "CSS", "React.js", "Redux.js", "Node.js", "SASS", "HTML", "Websockets", "Search Engine Optimization (SEO)",],
    },
  ];

  return (
    <section className={styles.experience}>
      <h2 className="heading2">Work Experience</h2>
      <div className={styles.experience__list}>
        {experiences.map((e, idx) => (
          <ExperienceBox
            key={idx}
            company={e.company}
            jobtitle={e.jobtitle}
            startDate={e.startDate}
            endDate={e.endDate}
            description={e.description}
            location={e.location}
            employmentType={e.employmentType}
            skills={e.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
