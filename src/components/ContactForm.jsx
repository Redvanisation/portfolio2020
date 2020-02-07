import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portfolio_email', 'contact_form', e.target, 'user_J7qkTKmKiuAZN1jhMiF8o')
      .then((result) => {
        // console.log(result.text);
        alert('Message sent!');
      }, (error) => {
        // console.log(error.text);
        alert('Error Sending message!');
      });

    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  handleChange(param, e) {
    this.setState({ [param]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.sendEmail.bind(this)} className="column container contact__content-div--form">
          <div className="field">
            <div className="control">
              <input className="input contact__content-div--form-inputs" type="text" name="from_name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name" />
            </div>
          </div>
  
          <div className="field">
            <div className="control">
              <input className="input contact__content-div--form-inputs" type="email" name="from_email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
            </div>
          </div>
  
          <textarea className="textarea contact__content-div--form-inputs" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} placeholder="Message" rows="5" name="message_html" />
  
          <input type="submit" value="Send" className="button" />
        </form>
    );
  }
}


export default ContactForm;
