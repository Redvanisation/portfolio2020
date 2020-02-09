import React, { Component } from 'react';
import Notification from './Nofitication';
import Nav from './Nav';
import Social from './Social';
import Header from '../containers/Header';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';
import Activity from '../containers/Activity';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false,
      msgSuccess: true,
    };

    this.setShowNote = this.setShowNote.bind(this);
    this.sendSuccess = this.sendSuccess.bind(this);
    this.sendError = this.sendError.bind(this);
  }

  setShowNote() {
    this.setState({
      showNote: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          showNote: false,
        });
      }, 2000);
    });
  }

  sendSuccess() {
    this.setState({
      msgSuccess: true,
    });
  }

  sendError() {
    this.setState({
      msgSuccess: false,
    });
  }


  render() {
    const { msgSuccess, showNote } = this.state;
    return (
      <div className="app">
        <Notification 
          notification={msgSuccess ? 'Message Sent!' : 'Error Sending Message!'}
          top={showNote ? 0 : -200}
        />
        <Nav />
        <Social />
        <Header />
        <Projects />
        <Contact
          setShowNote={this.setShowNote}
          sendSuccess={this.sendSuccess}
          sendError={this.sendError}
        />
        <Activity />
        <Footer />
      </div>
    );
  }
}

export default App;
