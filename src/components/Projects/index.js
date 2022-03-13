import React from "react";

function Projects() {
  const { name, githubLink, githubDeploy, projImg } = props;

  return (
    <div>
      <img src={projImg} />
      <div className="img-container">
        <h3>
          <a href={githubDeploy} target="_blank" className="project-name">
            {name}
          </a>
          <a href={githubLink} target="_blank"></a>
        </h3>
      </div>
    </div>
  );
}

export default Projects;
