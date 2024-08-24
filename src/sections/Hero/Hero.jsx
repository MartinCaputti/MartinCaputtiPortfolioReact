import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
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
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
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
          <a href="https://x.com/uwereiam/" target="_blank"></a>
          <img src={twitterIcon} alt="Twitter Icon"></img>
          <a href="https://Github.com/uwereiam/" target="_blank"></a>
          <img src={githubIcon} alt="Github Icon"></img>
          <a href="https://LinkedIn.com/uwereiam/" target="_blank"></a>
          <img src={linkedinIcon} alt="LinkedIn Icon"></img>
        </span>
        <p>Alguna frase copada </p>
        <a href={CV} download>
          <button className="hover">Curriculum</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
