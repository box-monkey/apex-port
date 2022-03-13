import React from "react";

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h1>Skills</h1>
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

        <br />
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
