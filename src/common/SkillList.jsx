function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="icono check"></img>
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
