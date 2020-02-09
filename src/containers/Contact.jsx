import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <section className="contact has-text-centered">
    <h2 className="section-title contact__title title is-2" id="contact">Contact</h2>
    <div className="columns contact__content-div">
      <div className="column contact__content-div--description">
        <h3 className="contact__content-div--title title is-4">About me</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat dignissimos rem animi? Explicabo eum quas blanditiis, excepturi vero facere iste aspernatur nulla ullam similique! Saepe animi ullam ratione, vero neque hic eveniet laborum qui molestiae incidunt! Aperiam, quos iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat dignissimos rem animi? Explicabo eum quas blanditiis, excepturi vero facere iste aspernatur nulla ullam similique! Saepe animi ullam ratione, vero neque hic eveniet laborum qui molestiae incidunt! Aperiam, quos iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat dignissimos rem animi? Explicabo eum quas blanditiis, excepturi vero facere iste aspernatur nulla ullam similique! Saepe animi ullam ratione, vero neque hic eveniet laborum qui molestiae incidunt! Aperiam, quos iste?
      </div>
      <hr className="contact__content-div--hr" />
      <ContactForm />
    </div>
  </section>
);

export default Contact;
