import React, { useState, useEffect } from 'react'

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import IconRouter from './IconRouter'
import './cash.scss'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function CashStep1() {
  let history = useHistory()

  function nextstep() {
    history.push('/shoppingcar/2')
  }
  function cancel() {
    history.push('/')
  }

  let { id } = useParams()

  const [carOne, setCarOne] = useState([])
  async function getCarOne(props) {
    try {
      const response = await fetch(
        'http://localhost:5000/productList' + { id },
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        setCarOne(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getCarOne()
  }, [])

  return (
    <>
      <div className="In-the-car">
        <IconRouter />

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
            {/*上半部色塊 要想辦法弄成元件*/}

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
