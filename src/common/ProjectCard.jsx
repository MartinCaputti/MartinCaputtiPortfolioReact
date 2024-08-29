import React from "react";
/*Le paso por parametro la fuente de la imagen , el enlace ,el h3 (con el alt) y el p */
/*Para contatenar parametro con texto uso ``*/
function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
