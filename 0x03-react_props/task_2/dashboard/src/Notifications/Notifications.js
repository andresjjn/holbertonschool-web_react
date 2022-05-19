import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

export default function Notifications() {
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
    <div className="Notifications">
      <button aria-label="Close" style={closeBtnStyles} onClick={closeBtnHandleClick}>X</button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div >
  )
}
