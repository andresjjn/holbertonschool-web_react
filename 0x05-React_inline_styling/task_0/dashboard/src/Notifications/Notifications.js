import React from 'react'
import PropTypes from 'prop-types';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

const closeBtnStyles = {
  float: 'right',
  border: 'none',
  background: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1.3rem'
}

const closeBtnHandleClick = () => {
  console.log('Close button has been clicked');
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className="NotificationsCointainer">
        {
          this.props.listNotifications.length > 0
            ? <React.Fragment>
              <div className="NotificationsTitle">Your notifications</div>
              {this.props.displayDrawer &&
                <div className="Notifications">
                  <button aria-label="Close" style={closeBtnStyles} onClick={closeBtnHandleClick}>X</button>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {
                      this.props.listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id} />
                      ))
                    }
                  </ul>
                </div >
              }
            </React.Fragment>
            : "No New notification for now"
        }
      </div>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

export default Notifications;
