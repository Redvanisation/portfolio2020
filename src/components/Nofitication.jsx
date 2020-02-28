import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ top, notification }) => (
  <div className="notificiation">
    <p className="notification__message title is-4" style={{ top: `${top}px` }}>{notification}</p>
  </div>
);

Notification.propTypes = {
  top: PropTypes.number.isRequired,
  notification: PropTypes.string.isRequired,
};

export default Notification;
