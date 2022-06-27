import React from 'react'
import PropTypes from 'prop-types'; // ES6

class NotificationItem extends React.PureComponent {
  render() {
    if (!this.props.html) {
      return (
        <li data-priority={this.props.type} onClick={() => markAsRead(this.props.id)}>
          {this.props.value}
        </li>
      );
    } else {
      return (
        <li data-priority={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => markAsRead(this.props.id)}></li>
      );
    }
  }
}

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
