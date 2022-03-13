import React from "react";
import me from '../../assets/images/me.jpg'

function About() {
  return (
    <section>
      <h2 className='section-title'>About Me</h2>
			<img
				src={me}
				alt='me'
				className='me'
			/>

        <h4>
          Hi, I'm Roberto Gasparin, I'm a full stack software developer.
          <br />
          My passion is building and creating art. I am eager to
          accumulate, share and implement knowledge.
          <br />
           Attended a rigorous
          bootcamp from the university of Toronto in collaberation with triOS
          college. 
          <br />In which I was able to gather full stack scope and
          application capabilites. 
          <br />
          With that being said, let's build things on
          the internet.
        </h4>
      
      <h1 id="about">Who am I?</h1>
    </section>
  );
}

export default About;
