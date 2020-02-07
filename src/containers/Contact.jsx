import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <section className="contact has-text-centered">
    <h2 className="section-title contact__title title is-2">Contact</h2>
    <div className="columns contact__content-div">
      <p className="column contact__content-div--description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat dignissimos rem animi? Explicabo eum quas blanditiis, excepturi vero facere iste aspernatur nulla ullam similique! Saepe animi ullam ratione, vero neque hic eveniet laborum qui molestiae incidunt! Aperiam, quos iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat dignissimos rem animi? Explicabo eum quas blanditiis, excepturi vero facere iste aspernatur nulla ullam similique! Saepe animi ullam ratione, vero neque hic eveniet laborum qui molestiae incidunt! Aperiam, quos iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat dignissimos rem animi? Explicabo eum quas blanditiis, excepturi vero facere iste aspernatur nulla ullam similique! Saepe animi ullam ratione, vero neque hic eveniet laborum qui molestiae incidunt! Aperiam, quos iste?
      </p>
      <hr className="contact__content-div--hr" />
      <ContactForm />
    </div>
  </section>
);

export default Contact;
