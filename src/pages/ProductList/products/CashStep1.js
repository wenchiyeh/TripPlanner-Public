import React, { useState, useEffect } from 'react'
import { FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

import { Form, Col, Button } from 'react-bootstrap'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import Icons from './Icons'
import './cash.scss'
import { useHistory } from 'react-router-dom'

function CashStep1() {
  let { product_id } = useParams()
  const [isLoading, setIsLoading] = useState(1)
  const [tichectButton, setTichectButton] = useState(true)
  let history = useHistory()

  function cancel() {
    history.push('/')
  }
  const [InCar, setInCar] = useState([])
  async function getInCar(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/productList/car1/${product_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setInCar(data)
        setTimeout(() => {
          if (data.length === 0) {
            setIsLoading(3)
          } else {
            setIsLoading(0)
          }
        }, 0)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  const step1 = InCar.length > 0 && (
    <>
      <div className="In-the-car">
        <div className="car-one">
          <Icons />
        </div>

        <div className="ticket-buy">
          <div className="ticket-title">
            <h4>{InCar[0].className}</h4>
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
                <h3>{InCar[0].classDate}</h3>
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
                <Button
                  variant="info"
                  onClick={(e) => {
                    console.log(e)
                    setTichectButton(false)
                  }}
                >
                  下一步
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const step2 = (
    <>
      <div className="In-the-car">
        <div className="car-two">
          <Icons />
        </div>
        <div className="ticket-buy">
          <div className="ticket-title">
            <h4>ssssss</h4>
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
                <p>1</p>
              </div>
              <div className="pay-for-it">
                <h3>NT$ </h3>
                <h3>400</h3>
              </div>
            </div>
            <hr />
            {/*上半部色塊 要想辦法弄成元件*/}
            <h3 className="about-member">填寫參加人資訊</h3>
            <Form noValidate className="step2-member-from">
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="11"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>姓名</Form.Label>
                  <span className="med-add-text-red">*</span>
                  <Form.Control
                    type="text"
                    placeholder="請輸入姓名"
                    aria-describedby=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    請輸入正確的姓名
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                {/* email */}
                <Form.Group as={Col} md="11" controlId="validationCustom01">
                  <Form.Label>信箱</Form.Label>
                  <span className="med-add-text-red">*</span>
                  <Form.Control
                    required
                    type="text"
                    placeholder="請輸入信箱"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>正確!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="11" controlId="validationCustom04">
                  <Form.Label>電話</Form.Label>
                  <span className="med-add-text-red">*</span>
                  <Form.Control type="text" placeholder="0988888888" required />
                  <Form.Control.Feedback type="invalid">
                    請輸入正確的電話號碼
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>出生日期</Form.Label>
                  <span className="med-add-text-red">*</span>
                  <Form.Control type="date" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    請輸入出生日期
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="exampleForm.SelectCustom"
                >
                  <Form.Label>性別</Form.Label>
                  <span className="med-add-text-red">*</span>
                  <Form.Control as="select" custom>
                    <option disabled>-請選擇-</option>
                    <option>男性</option>
                    <option>女性</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <hr />
              <h3 className="about-member">請選擇付款方式</h3>
              <div className="pay-form">
                <div>
                  <div className="mb-3">
                    <Form.Check type="radio">
                      <Form.Check.Input type="radio" name="pay-radio" />
                      <Form.Check.Label className="pay-icon">
                        <FaCcPaypal />
                      </Form.Check.Label>
                      <Form.Check.Label className="pay-icon">
                        Paypal
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div className="mb-3">
                    <Form.Check type="radio">
                      <Form.Check.Input type="radio" name="pay-radio" />
                      <Form.Check.Label className="pay-icon">
                        <FaCcVisa />
                      </Form.Check.Label>
                      <Form.Check.Label className="pay-icon">
                        Visa
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                </div>
              </div>
              <div className="check-and-btn">
                <Form.Check
                  className="warning"
                  type="checkbox"
                  label="若本人後續辦理退票作業，同意由旅歷代為處理銷售憑證"
                />

                <div className="btn-zone">
                  <Button variant="light" className="cancel">
                    取消
                  </Button>
                  <Button variant="info">結帳</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
  useEffect(() => {
    getInCar()
  }, [])

  if (isLoading === 0) {
    return tichectButton ? step1 : step2
  } else {
    return <h1>Loading</h1>
  }
}
export default CashStep1
