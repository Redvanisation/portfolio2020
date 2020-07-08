/* eslint-disable max-len */
import React from 'react';

const About = () => (
  <section className="about block has-text-centered">
    <h2 className="section-title title is-2" id="about">Who am I</h2>
    <div className="about__content">
      <p className="about__content--parag contact__content-div--parag">
        I&apos;m Radouane, a web developer based in New York City.
        I&apos;m creative, analytical and very passionate about web development.
        I was previously a lawyer for over 5 years but my passion for web development made me choose a different path.
        Through my time in web development I acquired professional-level skills including
        {' '}
        <span className="heighlight">Ruby, Ruby on Rails, JavaScript, React, Redux, Sass, Test-Driven development techniques</span>
        {' '}
        and more. I designed and developed more than 40 professional projects through pair programming with different coding partners remotely from around the world and mentored students on their different projects.
      </p>

      <p className="about__content--parag contact__content-div--parag">
        I&apos;m a maker at heart and in my free time I like to acquire as many skills as possible, whether it&apos;s learning a new programming language, learning musical instruments, cooking or any other skill I can get the tools for. Both at work and in my personal life, I&apos;m constantly chasing the satisfaction of a tangible finished product. When I&apos;m not working or crafting, I also try to spend time giving back to the community, especially supporting new developers and contributing to apps that can help the dev community over the world.
      </p>
    </div>
  </section>
);

export default About;
