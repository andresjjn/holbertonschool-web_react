import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div >
  )
}
