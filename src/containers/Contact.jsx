import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const tempParams = {
      from_name: name,
      from_email: email,
      to_name: 'Radouane Khiri',
      message_html: message,
    };

    emailjs.send(
      'portfolio_email',
      'contact_form',
      tempParams,
      'user_J7qkTKmKiuAZN1jhMiF8o',
    );

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
      <section className="contact has-text-centered">
        <h2 className="contact__title title is-2">Contact</h2>
        
        <form onSubmit={this.handleSubmit.bind(this)} className="container contact__form">
          
          <input type="hidden" name="contact_number" />
          
          <div className="field">
            <div className="control">
              <input className="input contact__form-inputs" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name" />
            </div>
          </div>
  
          <div className="field">
            <div className="control">
              <input className="input contact__form-inputs" type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
            </div>
          </div>
  
          <textarea className="textarea contact__form-inputs" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} placeholder="Message" rows="10" />
  
          <input type="submit" value="Send" className="button" />
        </form>
      </section>
    );
  }
}


export default Contact;
