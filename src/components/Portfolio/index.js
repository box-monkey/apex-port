import React from "react";
import Projects from "../Projects";
import apex1 from "../../assets/images/apex1.png";
import ecom from "../../assets/images/ecom.png";
import getfit from "../../assets/images/getfit.PNG";
import notetaker from "../../assets/images/notetaker.png";
import sellquicker from "../../assets/images/sellquicker.PNG";
import weatherapp from "../../assets/images/weatherapp.png";

function Portfolio() {
  return (
    <section>
        <Projects
				name='Techblog'
				githubLink='https://github.com/box-monkey/apex-blogtech'
				githubDeploy='https://apex-blogtech.herokuapp.com/'
				projImg={apex1}></Projects>


      <div>
        <img src={apex1} alt="blog type web page" />
      </div>
      <div>
        <img src={weatherapp} alt="A weather forecast app" />
      </div>
      <div>
        <img src={getfit} alt="A workout app" />
      </div>
      <div>
        <img src={notetaker} alt="Note taking app" />
      </div>
      <div>
        <img src={sellquicker} alt="ecommerce app" />
      </div>
    </section>
  );
}

export default Portfolio;
