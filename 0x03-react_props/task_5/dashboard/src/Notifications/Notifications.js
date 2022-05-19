import React from 'react'
import PropTypes from 'prop-types';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

function Notifications({ displayDrawer, listNotifications }) {
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

  return (
    <div className="NotificationsCointainer">
      {
        listNotifications.length > 0
          ? <React.Fragment>
            <div className="NotificationsTitle">Your notifications</div>
            {displayDrawer &&
              <div className="Notifications">
                <button aria-label="Close" style={closeBtnStyles} onClick={closeBtnHandleClick}>X</button>
                <p>Here is the list of notifications</p>
                <ul>
                  {
                    listNotifications.map((notification) => (
                      <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

export default Notifications;
