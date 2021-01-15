import React, { useState } from 'react'

import { FaCcPaypal, FaCcVisa } from 'react-icons/fa'

import { Form, Col, Button } from 'react-bootstrap'
import Icons from './Icons'
import './cash.scss'
import ShowCreditCard from './ShowCreditCard'

function CashStep2() {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <>
      <div className="In-the-car">
        <div class="car-two">
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
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="step2-member-from"
            >
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
                <ShowCreditCard />
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
}
export default CashStep2
