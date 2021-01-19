<<<<<<< HEAD
//通知彈跳表單-實驗用
import React from 'react'
import 'antd/dist/antd.css'
import { Button, notification } from 'antd'
import { FaRegBell } from 'react-icons/fa'
import NewNotice from '../member/newNotice'

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
        關閉
      </Button>
    )
    notification.open({
      message: '通知',
      // 內容
      description: <NewNotice />,
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
=======
//通知彈跳表單-實驗用
import React from 'react'
import 'antd/dist/antd.css'
import { Button, notification } from 'antd'
import { FaRegBell } from 'react-icons/fa'
import NewNotice from '../member/newNotice'

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
        關閉
      </Button>
    )
    notification.open({
      message: '通知',
      // 內容
      description: <NewNotice />,
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
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55
