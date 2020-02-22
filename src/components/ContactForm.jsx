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
    this.handleNote = this.handleNote.bind(this);
    this.handleSendSuccess = this.handleSendSuccess.bind(this);
    this.handleSendError = this.handleSendError.bind(this);
  }


  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portfolio_email', 'contact_form', e.target, 'user_J7qkTKmKiuAZN1jhMiF8o')
      .then(() => this.handleSendSuccess())
      .catch(() => this.handleSendError());

    this.resetForm();
    this.handleNote();
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

  handleNote() {
    const { setShowNote } = this.props;
    setShowNote();
  }

  handleSendSuccess() {
    const { sendSuccess } = this.props;
    sendSuccess();
  }

  handleSendError() {
    const { setShowNote } = this.props;
    setShowNote();
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <form onSubmit={this.sendEmail.bind(this)} className="column container contact__content-div--form">
          <div className="field">
            <div className="control">
              <input className="input contact__content-div--form-inputs" type="text" name="from_name" value={name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name" required />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input contact__content-div--form-inputs" type="email" name="from_email" value={email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" required />
            </div>
          </div>

          <textarea className="textarea contact__content-div--form-inputs" value={message} onChange={this.handleChange.bind(this, 'message')} placeholder="Message" rows="5" name="message_html" required />

          <input type="submit" value="Send" className="button button__red" />
        </form>
      </>
    );
  }
}


export default ContactForm;
