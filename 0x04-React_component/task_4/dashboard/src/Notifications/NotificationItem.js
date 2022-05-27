import React from 'react'
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead, id }) {
  if (!html) {
    return (
      <li data-priority={type} onClick={() => markAsRead(id)}>
        {value}
      </li>
    );
  } else {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
    );
  }
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ '_html': PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => { },
}

export default NotificationItem;
