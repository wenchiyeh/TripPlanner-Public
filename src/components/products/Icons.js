import React from 'react'

import { FaShoppingCart, FaRegCheckSquare } from 'react-icons/fa'
import { GoCreditCard } from 'react-icons/go'
import { MdKeyboardArrowRight } from 'react-icons/md'
import './cash.scss'
import { useHistory } from 'react-router-dom'

function IconRouter() {
  let history = useHistory()

  function car1() {
    history.push('/shoppingcar/1')
  }
  function car2() {
    history.push('/shoppingcar/2')
  }
  function car3() {
    history.push('/shoppingcar/3')
  }
  return (
    <>
      <div className="icons">
        <div className="mycar" onClick={car1}>
          <FaShoppingCart />
          <p>我的購物車</p>
        </div>

        <MdKeyboardArrowRight className="arrow" />

        <div className="howpay" onClick={car2}>
          <GoCreditCard />
          <p>付款方式</p>
        </div>

        <MdKeyboardArrowRight className="arrow" />

        <div className="okok" onClick={car3}>
          <FaRegCheckSquare />
          <p>訂單完成</p>
        </div>
      </div>
    </>
  )
}
export default IconRouter
