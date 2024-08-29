import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurguer from "../../assets/fresh-burger.png";
import fitLift from "../../assets/fitlift.png";
import hipsster from "../../assets/hipsster.png";
import ProjectCard from "../../common/ProjectCard";
/* podria haberlo hecho en un array u otra forma pero esta bien*/
function Projects() {
  return (
    <section id="projects" className={StyleSheet.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/MartinCaputti"
          h3="Vibber"
          p="Github Personal"
        ></ProjectCard>
        <ProjectCard
          src={freshBurguer}
          link="https://github.com/MartinCaputti"
          h3="FreshBurguer"
          p="Project 2"
        ></ProjectCard>
        <ProjectCard
          src={hipsster}
          link="https://github.com/MartinCaputti"
          h3="hipsster"
          p="Project 3"
        ></ProjectCard>
        <ProjectCard
          src={fitLift}
          link="https://github.com/MartinCaputti"
          h3="Fitlift"
          p="Project 4"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
