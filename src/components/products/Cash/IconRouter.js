import React from 'react'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter, Link } from 'react-router-dom'

import { FaShoppingCart, FaRegCheckSquare } from 'react-icons/fa'
import { GoCreditCard } from 'react-icons/go'
import { MdKeyboardArrowRight } from 'react-icons/md'
import './cash.scss'
// import CashStep1 from './CashStep1'
// import CashStep2 from './CashStep2'
// import CashStep3 from './CashStep3'

function IconRouter() {
  return (
    <>
      <div className="icons">
        <div>
          <Link to="/shoppingcar/1">
            <FaShoppingCart />
          </Link>
          <p>我的購物車</p>
        </div>

        <MdKeyboardArrowRight className="arrow" />

        <div>
          <Link to="/shoppingcar/2">
            <GoCreditCard />
          </Link>
          <p>付款方式</p>
        </div>

        <MdKeyboardArrowRight className="arrow" />

        <div>
          <Link to="/shoppingcar/3">
            <FaRegCheckSquare />
          </Link>
          <p>訂單完成</p>
        </div>
      </div>
    </>
  )
}
export default withRouter(IconRouter)
