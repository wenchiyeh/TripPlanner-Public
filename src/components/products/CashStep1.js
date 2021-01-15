import React, { useState, useEffect } from 'react'

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import Icons from './Icons'
import './cash.scss'
import { useHistory } from 'react-router-dom'

function CashStep1() {
  let history = useHistory()

  function nextstep() {
    history.push('/shoppingcar/2')
  }
  function cancel() {
    history.push('/')
  }

  return (
    <>
      <div className="In-the-car">
        <div class="car-one">
          <Icons />
        </div>

        <div className="ticket-buy">
          <div className="ticket-title">
            <h4>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</h4>
            <h4>早鳥票</h4>
          </div>

          <div className="you-sure">
            <div className="table-head">
              <div>
                <p>日期</p>
              </div>
              <div>
                <p>名稱</p>
              </div>
              <div>
                <p>數量</p>
              </div>
              <div>
                <p>價格</p>
              </div>
            </div>
            <hr />
            <div className="chose-your-ticket">
              <div>
                <h3>12/29</h3>
              </div>
              <div>
                <h3>早鳥票</h3>
              </div>

              <div className="how-many-ticket">
                <Button variant="light" className="minus-and-plus">
                  <AiFillMinusCircle />
                </Button>
                <p>1</p>
                <Button variant="light" className="minus-and-plus">
                  <AiFillPlusCircle />
                </Button>
              </div>
              <div className="pay-for-it">
                <h3>NT$ </h3>
                <h3>400</h3>
              </div>
            </div>
            <hr />

            <div className="how-much">
              <div className="subtotal">
                <p>小計</p>
                <p>400</p>
              </div>
              <div className="total">
                <h3>總金額</h3>
                <h3>400</h3>
              </div>
              <div className="btn-zone">
                <Button variant="light" className="cancel" onClick={cancel}>
                  取消
                </Button>
                <Button variant="info" onClick={nextstep}>
                  下一步
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CashStep1
