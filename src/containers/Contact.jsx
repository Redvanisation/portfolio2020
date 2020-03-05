/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../components/ContactForm';

const Contact = ({ setShowNote, sendSuccess, sendError }) => (
  <section className="contact has-text-centered">
    <h2 className="section-title contact__title title is-2" id="contact">Get in touch</h2>
    <div className="columns contact__content-div">
      <div className="column contact__content-div--description">
        <h3 className="contact__content-div--title title is-4">About me</h3>
        <p className="contact__content-div--parag">
          Hi, I&apos;m Radouane, a web developer based in New York City.
          I&apos;m creative, analytical and very passionate about web development.
          I was previously a lawyer for over 5 years but my passion for web development made me choose a different path.
          Through my time in web development I acquired professional-level skills including
          {' '}
          <span className="heighlight">Ruby, Ruby on Rails, JavaScript, React, Redux, Sass, Test-Driven development techniques</span>
          {' '}
          and more. I designed and developed more than 40 professional projects through pair programming with different coding partners remotely from around the world and mentored students on their different projects.
        </p>

        <p className="contact__content-div--parag">
          I&apos;m a maker at heart and in my free time I like to acquire as many skills as possible, whether it&apos;s learning a new programming language, learning musical instruments, cooking or any other skill I can get the tools for. Both at work and in my personal life, I&apos;m constantly chasing the satisfaction of a tangible finished product. When I&apos;m not working or crafting, I also try to spend time giving back to the community, especially supporting new developers and contributing to apps that can help the dev community over the world.
        </p>

      </div>
      <hr className="contact__content-div--hr" />
      <ContactForm setShowNote={setShowNote} sendSuccess={sendSuccess} sendError={sendError} />
    </div>
  </section>
);

Contact.propTypes = {
  setShowNote: PropTypes.instanceOf(Function).isRequired,
  sendSuccess: PropTypes.instanceOf(Function).isRequired,
  sendError: PropTypes.instanceOf(Function).isRequired,
};

export default Contact;
