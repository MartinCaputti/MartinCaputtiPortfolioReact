import styles from "./SkillsStyles.module.css";
import Aprobado from "../../assets/Aprobado.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habilidades</h1>
      <div className={styles.skillList}>
        <SkillList src={Aprobado} skill="HTML" />
        <SkillList src={Aprobado} skill="CSS" />
        <SkillList src={Aprobado} skill="JavaScript" />
        <SkillList src={Aprobado} skill="C" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Aprobado} skill="C++" />
        <SkillList src={Aprobado} skill="C#" />
        <SkillList src={Aprobado} skill="PHP" />
        <SkillList src={Aprobado} skill="MySQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Aprobado} skill="UML" />
        <SkillList src={Aprobado} skill="Dart" />
        <SkillList src={Aprobado} skill="Github" />
        <SkillList src={Aprobado} skill="Excel" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Aprobado} skill="React" />
        <SkillList src={Aprobado} skill="Flutter" />
        <SkillList src={Aprobado} skill="WordPress" />
      </div>
    </section>
  );
}

export default Skills;
