import React from "react";
import "./Projects.css";

function Projects(props) {
  const { name, githubLink, githubDeploy, projImg, repo } = props;

  return (
    <div>
      <img src={projImg} className="project-img"/>
      <div className="img-container">
        <h3>
          <a href={githubDeploy} target="_blank" className="project-name">
            {name}
          </a>

            <a href={githubLink} target="_blank">
            <img src={repo} className="github-img"/>
            </a>
          
        </h3>
      </div>
    </div>
  );
}

export default Projects;
