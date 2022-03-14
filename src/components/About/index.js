import React from "react";
import me from "../../assets/images/me.jpg";
import "./About.css";

function About() {
  return (
    <section>
      <h2 className="section-title">About Me</h2>
      <img src={me} alt="me" className="me" />

      <h4>
        Hi, I'm Roberto Gasparin, I'm a full stack developer.
        <br />
        My passion is building and creating art. I am eager to accumulate, share
        and implement knowledge. Attended a rigorous bootcamp from the
        university of Toronto in collaberation with triOS college. In which I
        was able to gather full stack application capabilites.
        <br />
        Let's build things on the internet.
      </h4>
    </section>
  );
}

export default About;
