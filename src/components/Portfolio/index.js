import React from "react";
import Projects from "../Projects";
import apex1 from "../../assets/images/apex1.png";
import jibberjabber from "../../assets/images/jib.png";
import getfit from "../../assets/images/getfit.PNG";
import notetaker from "../../assets/images/notetaker.png";
import sellquicker from "../../assets/images/sellquicker.PNG";
import weatherapp from "../../assets/images/weatherapp.png";
import ghlogo from "../../assets/images/logo.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-container">
         <Projects
        name="Jibber Jabber"
        repo={ghlogo}
        githubLink="https://github.com/KKkaran/Jibber-Jabber"
        githubDeploy="https://jibber-jabber-app.herokuapp.com/"
        projImg={jibberjabber}
      ></Projects>

      <Projects
        name="Techblog"
        repo={ghlogo}
        githubLink="https://github.com/box-monkey/apex-blogtech"
        githubDeploy="https://apex-blogtech.herokuapp.com/"
        projImg={apex1}
      ></Projects>

      <Projects
        name="getfit"
        repo={ghlogo}
        githubLink="https://github.com/box-monkey/git-fit"
        githubDeploy="https://kkkaran.github.io/Get-Fit-App/"
        projImg={getfit}
      ></Projects>

      <Projects
        name="Weather Forecast"
        repo={ghlogo}
        githubLink="https://github.com/box-monkey/digital-samurai"
        githubDeploy="https://box-monkey.github.io/digital-samurai/"
        projImg={weatherapp}
      ></Projects>

      <Projects
        name="Notetaker"
        repo={ghlogo}
        githubLink="https://github.com/box-monkey/apex-note-taker"
        githubDeploy="https://apex-note-taker.herokuapp.com/"
        projImg={notetaker}
      ></Projects>

      <Projects
        name="Sellquicker"
        repo={ghlogo}
        githubLink="https://github.com/KKkaran/sell-quicker"
        githubDeploy="https://sellquicker.herokuapp.com/"
        projImg={sellquicker}
      ></Projects>

    </section>
  );
}

export default Portfolio;
