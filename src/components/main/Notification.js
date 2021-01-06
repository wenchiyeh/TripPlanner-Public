//小鈴鐺元件
import React from 'react'
import 'antd/dist/antd.css'
import { Button, notification } from 'antd'
import { FaRegBell } from 'react-icons/fa'

function Notification() {
  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.'
    )
  }

  const openNotification = () => {
    const key = `open${Date.now()}`
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    )
    notification.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    })
  }
  return (
    <>
      <div type="primary" onClick={openNotification}>
        <FaRegBell className="Navbar-icon" />
      </div>
    </>
  )
}

export default Notification
