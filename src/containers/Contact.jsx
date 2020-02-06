import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  function sendEmail(e) {
  //   e.preventDefault();
  
  //   emailjs.sendForm('portfolio_email', 'contact_form', e.target, 'user_J7qkTKmKiuAZN1jhMiF8o')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  }

  return (
    <section className="contact has-text-centered">
    <h2 className="contact__title title is-2">Contact</h2>
      
      <form className="contact-form" onSubmit={sendEmail}  className="container contact__form">
        
        <input type="hidden" name="contact_number" />
        
        <div className="field">
          <div className="control">
            <input className="input contact__form-inputs" type="text" name="user_name" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input contact__form-inputs" type="email" name="user_email" placeholder="Email" />
          </div>
        </div>

        <textarea className="textarea contact__form-inputs" placeholder="Message" rows="10" />

        <input type="submit" value="Send" className="button" />
      </form>
    </section>
  );
}
