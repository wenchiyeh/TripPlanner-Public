import { FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import Icons from './Icons'
import './cash.scss'
import { useHistory } from 'react-router-dom'
import ShowCreditCard from './ShowCreditCard'
function CashStep1({
  className,
  classDate,
  ticket_price,
  ticketData,
  showTicketType,
}) {
  const [tichectButton, setTichectButton] = useState(true)

  const earlyTicket = ticketData.earlyTicket
  const singleTicket = ticketData.singleTicket
  const groupTicket = ticketData.groupTicket
  function ShowTicketType() {
    if (earlyTicket > 0) {
      return '早鳥票'
    } else if (singleTicket > 0) {
      return '單人票'
    } else if (groupTicket > 0) {
      return '雙人票'
    } else {
      return '你沒買票'
    }
  }
  function HowMany() {
    if (earlyTicket > 0) {
      return earlyTicket
    } else if (singleTicket > 0) {
      return singleTicket
    } else if (groupTicket > 0) {
      return groupTicket
    } else {
      return '你沒買票'
    }
  }
  const [totalTicket, setTotalTicket] = useState(HowMany())

  const reallyPrice = ticket_price.split('-')
  function showTicketPrice() {
    if (earlyTicket > 0) {
      return totalTicket * reallyPrice[0]
    } else if (singleTicket > 0) {
      return totalTicket * reallyPrice[1]
    } else if (groupTicket > 0) {
      return totalTicket * reallyPrice[2]
    }
  }
  let history = useHistory()

  function goBack() {
    history.goBack()
  }

  const step1 = (
    <>
      <div className="In-the-car">
        <div className="car-one">
          <Icons />
        </div>

        <div className="ticket-buy">
          <div className="ticket-title">
            <h4>{className}</h4>
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
                <h3>{classDate}</h3>
              </div>
              <div>{ShowTicketType()}</div>

              <div className="how-many-ticket">
                {totalTicket <= 0 ? (
                  <Button
                    variant="light"
                    className="minus-and-plus"
                    onClick={() => setTotalTicket(totalTicket - 1)}
                    disabled
                  >
                    <AiFillMinusCircle />
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    className="minus-and-plus"
                    onClick={() => setTotalTicket(totalTicket - 1)}
                  >
                    <AiFillMinusCircle />
                  </Button>
                )}
                <p>{totalTicket}</p>

                <Button
                  variant="light"
                  className="minus-and-plus"
                  onClick={() => setTotalTicket(totalTicket + 1)}
                >
                  <AiFillPlusCircle />
                </Button>
              </div>
              <div className="pay-for-it">
                <h3>NT$ </h3>

                <h3>{showTicketPrice()}</h3>
              </div>
            </div>
            <hr />

            <div className="how-much">
              <div className="total">
                <h3>總金額</h3>
                <h3>{showTicketPrice()}</h3>
              </div>
              <div className="btn-zone">
                <Button variant="light" className="cancel" onClick={goBack}>
                  取消
                </Button>
                <Button
                  variant="info"
                  onClick={(e) => {
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

  const [user, setUser] = useState([])
  const [user_name, setUser_name] = useState('')
  const [user_mail, setUser_mail] = useState('')
  const [user_phone, setUser_phone] = useState('')
  const [user_birthday, setUser_birthday] = useState('')
  const [user_gender, setUser_gender] = useState('')
  const buy_ticket_price = showTicketPrice()
  const buy_ticket_type = ShowTicketType()

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      //event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
      getUser()
    }
    setValidated(true)
  }
  async function getUser() {
    try {
      const response = await fetch('http://localhost:5000/gohistory', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_name,
          user_mail,
          user_phone,
          user_birthday,
          user_gender,
          buy_ticket_price,
          buy_ticket_type,
        }),
      })
      if (response.ok) {
        const data = await response.json()
        setUser(data.member)
        history.push('/login')
      } else {
        history.push('/sigon')
      }
    } catch (err) {
      alert('請輸入正確的帳號密碼!')
      console.log(err)
    }
  }

  const step2 = (
    <>
      <div className="In-the-car">
        <div className="car-two">
          <Icons />
        </div>
        <div className="ticket-buy">
          <div className="ticket-title">
            <h4>{className}</h4>
            <h4>{ShowTicketType()}</h4>
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
                <h3>{classDate}</h3>
              </div>
              <div>
                <h3>{ShowTicketType()}</h3>
              </div>

              <div className="how-many-ticket">
                <p>{totalTicket}</p>
              </div>
              <div className="pay-for-it">
                <h3>NT$ </h3>
                <h3>{showTicketPrice()}</h3>
              </div>
            </div>
            <hr />

            <h3 className="about-member">填寫參加人資訊</h3>
            <Form
              noValidate
              className="step2-member-from"
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Control type="hidden" value={className} />
              <Form.Control type="hidden" value={classDate} />
              <Form.Control type="hidden" value={totalTicket} />
              <Form.Control type="hidden" value={showTicketPrice()} />
              <Form.Control type="hidden" value={ShowTicketType()} />

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
                    onChange={(e) => {
                      setUser_name(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setUser_mail(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback>正確!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="11" controlId="validationCustom04">
                  <Form.Label>電話</Form.Label>
                  <span className="med-add-text-red">*</span>

                  <Form.Control
                    type="text"
                    placeholder="0988888888"
                    required
                    onChange={(e) => {
                      setUser_phone(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    請輸入正確的電話號碼
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>出生日期</Form.Label>
                  <span className="med-add-text-red">*</span>
                  <Form.Control
                    type="date"
                    placeholder=""
                    required
                    onChange={(e) => {
                      setUser_birthday(e.target.value)
                    }}
                  />
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
                  <Form.Control
                    as="select"
                    custom
                    onChange={(e) => {
                      setUser_gender(e.target.value)
                    }}
                  >
                    <option disabled>-請選擇-</option>
                    <option value="1">男性</option>
                    <option value="2">女性</option>
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
                  <ShowCreditCard />
                </div>
              </div>
              <div className="check-and-btn">
                <Form.Check
                  className="warning"
                  type="checkbox"
                  label="若本人後續辦理退票作業，同意由旅歷代為處理銷售憑證"
                />

                <div className="btn-zone">
                  <Button variant="light" className="cancel" onClick={goBack}>
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

  return tichectButton ? step1 : step2
}
export default CashStep1
