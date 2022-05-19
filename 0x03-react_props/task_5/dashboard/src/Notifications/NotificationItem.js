import React from 'react'
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  if (!html) {
    return (
      <li data-priority={type}>
        {value}
      </li>
    );
  } else {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
  }
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ '_html': PropTypes.string }),
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: "default",
}

export default NotificationItem;
