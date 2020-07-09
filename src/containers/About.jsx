/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-scroll';

const About = () => (
  <section className="about block has-text-centered">
    <h2 className="section-title title is-2" id="about">Who am I</h2>
    <div className="about__content">

      <p className="about__content--parag">
        Any programmer worth their salt can make something&nbsp;
        <span className="heighlight">&quot;work&quot;</span>
        , but very few can make it look truly incredible.
      </p>
      <p className="about__content--parag">
        I&apos;m Radouane, a full-stack web developer and a former lawyer based in New Jersey, USA, I&apos;m a polyglot (Multi-lingual) developer with a great knowledge of&nbsp;
        <span className="heighlight">software development methodologies</span>
        &nbsp;,&nbsp;
        <span className="heighlight">frameworks</span>
        &nbsp;, and&nbsp;
        <span className="heighlight">Software Development Life Cycle (SDLC)</span>
        &nbsp;and I&apos;ve been a team player in multiple development and software consulting projects.
      </p>
      <p className="about__content--parag">
        I&apos;m very passionate about new technologies and I&apos;m constantly learning new patterns that would be useful throughout my path.
      </p>
      <p className="about__content--parag about__content--action-call">
        You have an interesting idea or a project you want to discuss?&nbsp;
        <br />
        <Link
          className="button button__red heighlight about__content--button mt-5"
          to="contact"
          smooth
          duration={500}
        >
          CONTACT ME !
        </Link>
      </p>

    </div>
  </section>
);

export default About;
