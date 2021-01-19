<<<<<<< HEAD
//通知泡泡元件
import React from 'react'
import { Popover } from 'antd'
import { FaRegBell } from 'react-icons/fa'
import './MebPopover.scss'
import NewNotice from '../../member/NewNotice'

function MebPopover(params) {
  const hrefnew = 'http://localhost:3000/login'

  const text = <span>通知</span>
  const content = (
    <div className="MebPopover-style">
      <NewNotice />
      <button className="d-flex" type="primary" onClick={hrefnew}>
        更多
      </button>
    </div>
  )
  const buttonWidth = 0
  return (
    <>
      <div className="demo">
        <div
          style={{
            marginLeft: buttonWidth,
            clear: 'both',
            whiteSpace: 'nowrap',
          }}
        >
          <Popover
            placement="topRight"
            title={text}
            content={content}
            trigger="click"
          >
            <FaRegBell className="Navbar-icon" />
          </Popover>
        </div>
      </div>
    </>
  )
}

export default MebPopover
=======
//通知泡泡元件
import React from 'react'
import { Popover } from 'antd'
import { FaRegBell } from 'react-icons/fa'
import './MebPopover.scss'
import NewNotice from '../../member/NewNotice'

function MebPopover(params) {
  const hrefnew = 'http://localhost:3000/login'

  const text = <span>通知</span>
  const content = (
    <div className="MebPopover-style">
      <NewNotice />
      <button className="d-flex" type="primary" onClick={hrefnew}>
        更多
      </button>
    </div>
  )
  const buttonWidth = 0
  return (
    <>
      <div className="demo">
        <div
          style={{
            marginLeft: buttonWidth,
            clear: 'both',
            whiteSpace: 'nowrap',
          }}
        >
          <Popover
            placement="topRight"
            title={text}
            content={content}
            trigger="click"
          >
            <FaRegBell className="Navbar-icon" />
          </Popover>
        </div>
      </div>
    </>
  )
}

export default MebPopover
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55
