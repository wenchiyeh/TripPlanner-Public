import React from 'react'
import { FaShoppingCart, FaRegCheckSquare } from 'react-icons/fa'
import { GoCreditCard } from 'react-icons/go'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

function CarCardCheck(props) {
  return (
    <>
      <div className="In-the-car">
        <div className="icons">
          <div className=" active">
            <FaShoppingCart />
            <p>我的購物車</p>
          </div>

          <MdKeyboardArrowRight className="arrow" />

          <div>
            <GoCreditCard />
            <p>付款方式</p>
          </div>

          <MdKeyboardArrowRight className="arrow" />

          <div>
            <FaRegCheckSquare />
            <p>訂單完成</p>
          </div>
        </div>

        <div className="ticket-buy">
          <div className="ticket-title">
            <h4>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</h4>
            <h4>早鳥票</h4>
          </div>

          <div className="you-sure"></div>
        </div>

        <AiFillPlusCircle />
        <AiFillMinusCircle />
      </div>
    </>
  )
}
export default CarCardCheck
