import React from 'react';

const Contact = () => (
  <section className="contact has-text-centered">
    <h2 className="contact__title title is-2">Contact</h2>

    <form action="#" className="container contact__form">
      <div className="field">
        {/* <label className="label">Name</label> */}
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        {/* <label className="label">Email</label> */}
        <div className="control">
          <input className="input" type="email" placeholder="Email" />
        </div>
      </div>
      <textarea className="textarea" placeholder="Message" rows="10" />
      <input type="submit" className="button" />
    </form>

  </section>
);

export default Contact;
