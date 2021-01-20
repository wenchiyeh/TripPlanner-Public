import React from 'react'
import { Popover } from 'antd'
import { FiShoppingCart } from 'react-icons/fi'
import './shoppingCar.scss'
import CarValue from './CarValue'

function ShoppingCarIcon(params) {
  // const hrefnew = 'http://localhost:3000/login'

  const text = <span>購物車</span>
  const content = (
    <div className="MebPopover-style">
      <CarValue />
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
            <FiShoppingCart className="Navbar-icon" />
          </Popover>
        </div>
      </div>
    </>
  )
}

export default ShoppingCarIcon
