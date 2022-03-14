import React from "react";
import Projects from "../Projects";
import apex1 from "../../assets/images/apex1.png";
import ecom from "../../assets/images/ecom.png";
import getfit from "../../assets/images/getfit.PNG";
import notetaker from "../../assets/images/notetaker.png";
import sellquicker from "../../assets/images/sellquicker.PNG";
import weatherapp from "../../assets/images/weatherapp.png";
import ghlogo from "../../assets/images/logo.png";

function Portfolio() {
  return (
    <section>
      <Projects
        name="Techblog"
        repo="ghlogo"
        githubLink="https://github.com/box-monkey/apex-blogtech"
        githubDeploy="https://apex-blogtech.herokuapp.com/"
        projImg={apex1}
      ></Projects>

      
      {/* <Projects
        name="getfit"
        githubLink="https://github.com/box-monkey/git-fit"
        githubDeploy="https://kkkaran.github.io/Get-Fit-App/"
        projImg={getfit}
      ></Projects>
        <Projects
        name="Weather Forecast"
        githubLink="https://box-monkey.github.io/digital-samurai/"
        githubDeploy="https://github.com/box-monkey/digital-samurai"
        projImg={weatherapp}
      ></Projects> */}

    </section>
  );
}

export default Portfolio;
