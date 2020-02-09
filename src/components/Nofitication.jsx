import React, { Component } from 'react';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      top: '-200px',
    };
  }

  showNotification() {
    this.setState({
      top: 0,
    }, () => {
      setTimeout(() => {
        this.setState({
          top: '-200px',
        });
      }, 2000);
    });
  }

  render() {
    return (
      <div className="notificiation">
        
        <p className="notification__message" style={{ top:this.state.top }}>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;
