//會員查改
import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import './MemberEdit.scss'
//引入資料庫
//let memberUsersData = require('../member.json')
//let handleTestData = memberUsersData[2].data
//let id = 4
//帶入資料庫
function MemberEdit(props) {
  let { id } = useParams()
  let history = useHistory()
  const [member, setMember] = useState([])
  const [member_name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [area, setArea] = useState('')
  const [member_phone, setPhone] = useState('')
  const [birthday, setBirthday] = useState('')
  const [member_sex, setmember_sex] = useState('')
  const [member_id, setMember_id] = useState('')
  const [member_aboutme, setMember_aboutme] = useState('')

  async function getMember(id) {
    try {
      const response = await fetch('http://localhost:5000/member', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setMember(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getMember()
  }, [])

  //更新
  async function updateMember(id) {
    const newMember = {
      member_name,
      email,
      password,
      area,
      member_phone,
      birthday,
      member_sex,
      member_id,
      member_aboutme,
    }
    try {
      const response = await fetch('http://localhost:5000/member', {
        body: JSON.stringify(newMember),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        const data = await response.json()
        setMember(data)
        if (data.id) alert('更新成功')

        history.push('/member')
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  //元件狀態
  const [validated, setValidated] = useState(false)
  //元件事件
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  {
    //DOM表單
    let display = <></>
    //導入member[1]
    display = member.length > 0 && (
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
              defaultValue={member[1].email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
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
              defaultValue={member[1].password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
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
              defaultValue={member[1].member_name}
              aria-describedby=""
              required
              onChange={(e) => {
                setName(e.target.value)
              }}
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
            <Form.Control
              type="text"
              placeholder="請輸入地區"
              // defaultValue={member[1].area}
              required
              onChange={(e) => {
                setArea(e.target.value)
              }}
            />
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
            <Form.Control
              type="text"
              placeholder="0988888888"
              defaultValue={member[1].member_phone}
              required
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
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
            <Form.Control
              type="date"
              placeholder=""
              defaultValue={member[1].birthday}
              required
              onChange={(e) => {
                setBirthday(e.target.value)
              }}
            />
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
            <Form.Control
              as="select"
              custom
              defaultValue={member[1].member_sex}
              onChange={(e) => {
                setmember_sex(e.target.value)
              }}
            >
              <option disabled>-請選擇-</option>
              <option value="1">男性</option>
              <option value="2">女性</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <div className="mb-3">
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>更換大頭照</Form.File.Label>
                <Form.File.Input />
              </Form.File>
            </div>
          </Form.Group>
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
              defaultValue={member[1].member_id}
              onChange={(e) => {
                setMember_id(e.target.value)
              }}
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
              as="textarea"
              rows={3}
              required
              type="text"
              placeholder="例：我在資策會學習網頁前端"
              defaultValue={member[1].member_aboutme}
              onChange={(e) => {
                setMember_aboutme(e.target.value)
              }}
            />
          </Form.Group>
        </Form.Row>
        <Button
          className="memed-submit"
          onClick={() => {
            updateMember(id)
          }}
        >
          確定
        </Button>
      </Form>
    )

    return <>{display}</>
  }
}
export default MemberEdit
