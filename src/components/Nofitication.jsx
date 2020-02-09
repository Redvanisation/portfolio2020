import React from 'react';

const Notification = ({ top, notification }) => (
  <div className="notificiation">
    <p className="notification__message title is-4" style={{ top: `${top}px` }}>{notification}</p>
  </div>
);

export default Notification;
