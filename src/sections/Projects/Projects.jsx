import styles from "./ProjectsStyles.module.css";
import fin from "../../assets/Fin.jpg";
import JuegoPong from "../../assets/ping-pong.png";
import ComingSoon from "../../assets/ComingSoon.jpg";
import ProjectCard from "../../common/ProjectCard";
/* podria haberlo hecho en un array u otra forma pero esta bien*/
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fin}
          link="https://simaleara.com.ar/inicio"
          h3="SimAleara"
          p="Simulador de recibos"
        ></ProjectCard>
        <ProjectCard
          src={JuegoPong}
          link="https://juegopongmartin.netlify.app/"
          h3="JuegoPong"
          p="Clasico Juego Pong en JavaScript"
        ></ProjectCard>
        <ProjectCard
          src={ComingSoon}
          link="https://github.com/MartinCaputti"
          h3="Proximamente"
          p="Proyecto en desarrollo "
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
