/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../components/ContactForm';

const Contact = ({ setShowNote, sendSuccess, sendError }) => (
  <section className="contact has-text-centered">
    <h2 className="section-title contact__title title is-2" id="contact">Get in touch</h2>

    <ContactForm setShowNote={setShowNote} sendSuccess={sendSuccess} sendError={sendError} />

  </section>
);

Contact.propTypes = {
  setShowNote: PropTypes.instanceOf(Function).isRequired,
  sendSuccess: PropTypes.instanceOf(Function).isRequired,
  sendError: PropTypes.instanceOf(Function).isRequired,
};

export default Contact;
