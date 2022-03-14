import React from "react";

function Projects(props) {
  const { name, githubLink, githubDeploy, projImg, repo } = props;

  return (
    <div>
      <img src={projImg} />
      <div className="img-container">
        <h3>
          <a href={githubDeploy} target="_blank" className="project-name">
            {name}
          </a>

          {/* <a href={githubLink} target="_blank">
            <svg xlms='http://www.w3.org/2000/svg' 
            viewBox='0 0 512 512'>
            <img src={repo} />
            Github repo
            </svg>
            </a> */}

            <a href={githubLink} target="_blank">
            <img src={repo} />
            </a>
          
        </h3>
      </div>
    </div>
  );
}

export default Projects;
