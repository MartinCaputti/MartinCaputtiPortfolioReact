import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Martin2.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import InstaClaro from "../../assets/Insta-claro.svg";
import InstaOscuro from "../../assets/Insta-Oscuro.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  /* cambios de iconos entre tema claro y oscuro */
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const IconoInstagram = theme === "light" ? InstaClaro : InstaOscuro;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Imagen de perfil de Martin Caputti"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div>
        <h1>
          Martin <br></br>
          Caputti
        </h1>
        <h2>Full stack Developer</h2>
        <span>
          <a href="https://Github.com/MartinCaputti/" target="_blank">
            <img src={githubIcon} alt="Github Icon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/martin-caputti-950806b5/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon"></img>
          </a>
          <a href="https://www.instagram.com/noback12/" target="_blank">
            <img src={IconoInstagram} alt="Instagram Icon"></img>
          </a>
        </span>
        <p>Estudiando , Pensando , Creando y Resolviendo Problemas</p>
        <br></br>
        <a href={CV} download>
          <button className="hover">Curriculum</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
