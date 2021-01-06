import React from 'react'
import 'antd/dist/antd.css'
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
      <button className="d-flex" onClick={hrefnew}>
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
            placement="bottomRight"
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
