//會員新增查改
import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import './MemberEdit.scss'

function MemberEdit(props) {
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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          {/* email */}
          <Form.Group as={Col} md="12" controlId="validationCustom01">
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
        {/* 密碼 */}
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>密碼</Form.Label>
            <span className="med-add-text-red">*</span>
            <Form.Control
              required
              type="password"
              placeholder="請輸入密碼"
              defaultValue=""
            />
            <Form.Control.Feedback>正確!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        {/* 姓名 */}
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
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
          {/* 地區 */}
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>地區</Form.Label>
            <span className="med-add-text-red">*</span>
            <Form.Control type="text" placeholder="請輸入地區" required />
            <Form.Control.Feedback type="invalid">
              請輸入正確的地區
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        {/* 電話 */}
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>電話</Form.Label>
            <span className="med-add-text-red">*</span>
            <Form.Control type="text" placeholder="0988888888" required />
            <Form.Control.Feedback type="invalid">
              請輸入正確的電話號碼
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        {/* 出生日期 */}
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
        {/* 性別 */}
        <Form.Row>
          <Form.Group as={Col} md="3" controlId="exampleForm.SelectCustom">
            <Form.Label>性別</Form.Label>
            <span className="med-add-text-red">*</span>
            <Form.Control as="select" custom>
              <option disabled>-請選擇-</option>
              <option>男性</option>
              <option>女性</option>
            </Form.Control>
          </Form.Group>
          {/* 舊的 */}
          {/* <div class="form-check d-flex">
            <div className="mefed-form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                男性
              </label>
            </div>
            <div className="mefed-form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                女性
              </label>
            </div>
          </div> */}
        </Form.Row>
        {/* 暱稱 */}
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>暱稱</Form.Label>
            <span className="med-add-text-red">*</span>
            <Form.Control
              required
              type="text"
              placeholder="例：小智"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        {/* 自我介紹 */}
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>自我介紹</Form.Label>
            <span className="med-add-text-red">*</span>
            <Form.Control
              required
              type="text"
              placeholder="例：我在資策會學習網頁前端"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className="memed-submit">
          確定
        </Button>
      </Form>
    </>
  )
}

export default MemberEdit
