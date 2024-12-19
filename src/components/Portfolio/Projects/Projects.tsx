import Project, { ProjectProps } from "./Project/Project";
import styles from "./Projects.module.scss";

type ProjectsProps = {
  pass?: boolean;
};

const Projects: React.FC<ProjectsProps> = () => {
  const projects: ProjectProps[] = [
    {
      imageUrl: "https://tiskae.netlify.app/src/img/car-games.png",
      title: "Car Games",
      description:
        "A fullstack car games mobile application built with React Native. The app features authentication, stack and tab navigations and player leaderboard.",
      projectUrl: "https://github.com/tiskae/car-games",
      toolsUsed: ["React Native", "React Navigation", "MobX", "Node.js"],
    },
    {
      imageUrl: "https://tiskae.netlify.app/src/img/sudocool.png",
      title: "Sudocool",
      description:
        "Sudocool is a web application that gives random difficulty-based Sudoku puzzle for you to solve. It implements all rules of Sudoku. Additionally, it can solve any valid Sudoku puzzle instantly using the backtracing algorithm",
      projectUrl: "https://sudocool.netlify.app",
      toolsUsed: ["React", "Redux", "Routing", "CSS"],
    },
    {
      imageUrl: "https://tiskae.netlify.app/src/img/quizzaly.png",
      title: "Quizzaly",
      description:
        "Quizzaly is a quiz app built using React.js and Firebase as the Realtime Database. The app features quite a lot of tracks and allows for difficulty, mode of options and number of questions preferences.",
      projectUrl: "https://quizzaly.netlify.app",
      toolsUsed: ["React.js", "Routing", "Firebase", "CSS"],
    },
    {
      imageUrl: "https://tiskae.netlify.app/src/img/cgpa-dark.png",
      title: "CGPA Calculator",
      description:
        "This is a frontend wpp, a CGPA calculator that basically helps students to calculate their CGPA easily in a simple and user-friendly experience. Built using the MVC JavaScript aechitecture and styled using SCSS",
      projectUrl: "https://calc-cgpa.netlify.app",
      toolsUsed: ["HTML", "SASS", "JavaScript", "MVC"],
    },
    {
      imageUrl: "https://tiskae.netlify.app/src/img/zero8.jpg",
      title: "Infinix Zero 8",
      description:
        "A landing page for the mid-range smartphone from InfinixMobility, the Zero 8. It's a single-paged website showing all the features of the mobile phone in a cool and nice user experience. Subtle animations are noticeable.",
      projectUrl: "https://zero8.netlify.app",
      toolsUsed: ["HTML", "CSS", "SASS", "JavaScript"],
    },
    {
      imageUrl: "https://tiskae.netlify.app/src/img/sunny-side.netlify.app_.png",
      title: "SunnySide Landing Page",
      description:
        "A channlenge by Frontend Mentor to code up a simple fully responsive landing page. The design is neat and pixel perfect.",
      projectUrl: "https://sunny-side.netlify.app/",
      toolsUsed: ["HTML", "CSS", "SASS", "JavaScrupt"],
    },
  ];

  return (
    <section className={styles.projects}>
      <h2 className="heading2">Personal Projects</h2>
      <div className={styles.projects__list}>
        {projects.map((p, idx) => (
          <Project
            key={idx}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.description}
            projectUrl={p.projectUrl}
            toolsUsed={p.toolsUsed}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
