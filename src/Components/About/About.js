import React from 'react';
import './About.css';
const About = () => {
  return (
    <section className='about-container'>
      <div className='about-content'>
        {/* <h2>Building Digital Experience That Inspire</h2> */}
        <h2>Hey! I am Rohankumar V</h2>
        <p>Passionate Frontend Developer | Transforming Ideas into Seamless and 
          visually Stunning Web Solutions and Mobile Solutions.
        </p>
      </div>
      <div className='hero-img'>
        <div>
          {/* <div className='tech-icon'> */}
          <img src="./assets/images/hero.png" alt="" />
        {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
