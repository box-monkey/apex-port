import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <p>
          Download my<span> </span>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQfZxwVA4GGAeHkQZwYShOQbgMcDZdAxxtFt-9x49L3O-uHypMktUtCU81BOXG6W1xHXvjW_QEW6qv3/pub"
            target="_blank"
          >
            resume
          </a>
        </p>

        <h1>Skills</h1>
        <p>University of Toronto full stack boot-camp graduate.</p>
        {/* <br/> */}

        <h2>Front End</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>React</li>
        </ul>

        <h2>Back End</h2>
        <ul>
          <li>APIs</li>
          <li>Node.Js</li>
          <li>Express</li>
          <li>MySQL / Sequelize</li>
          <li>MondoDB / Mongoose</li>
          <li>REST</li>
          <li>MERN</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
