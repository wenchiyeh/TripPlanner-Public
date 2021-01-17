//會員查改
import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import './MemberEdit.scss'

function MemberEdit({ member }) {
  let { id } = useParams()
  let history = useHistory()
  const [members, setMembers] = useState('')
  const [member_name, setMember_name] = useState('')
  const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  //const [area, setArea] = useState('')
  const [member_phone, setPhone] = useState('')
  //const [birthday, setBirthday] = useState('')
  const [member_sex, setmember_sex] = useState('')
  const [member_id, setMember_id] = useState('')
  const [member_aboutme, setMember_aboutme] = useState('')

  //更新
  async function updateMember() {
    const newMember = {
      email,
      //password,
      member_name,
      member_phone,
      // birthday,
      member_sex,
      member_id,
      member_aboutme,
    }
    try {
      const response = await fetch(`http://localhost:5000/udmember`, {
        mode: 'cors',
        method: 'post',
        body: JSON.stringify(newMember),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        const data = await response.json()
        setMembers(data)
        console.log(data)
        if (data.id) alert('更新成功')
        //history.push('/member')
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  async function getMember(id) {
    try {
      const response = await fetch(`http://localhost:5000/member/${id}`, {
        mode: 'cors',
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        // 設定到每個欄位
        setEmail(data.email)
        setMember_name(data.member_name)
        setPhone(data.phone)
        // setBirthday(data.birthday)
        setmember_sex(data.member_sex)
        setMember_id(data.member_id)
        setMember_aboutme(data.member_aboutme)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    if (member > 0) {
      console.log('hi model')
      //getMember(id)
      updateMember(id)
    }
    console.log('ud:', member)
  }, [member, id])

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

  //導入member[0]
  return (
    member.length > 0 && (
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
                defaultValue={member[0].email}
                onChange={(e) => {
                  setEmail(e.target.value)
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
                defaultValue={member[0].member_name}
                aria-describedby=""
                required
                onChange={(e) => {
                  setMember_name(e.target.value)
                }}
              />
              <Form.Control.Feedback type="invalid">
                請輸入正確的姓名
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {/* <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>地區</Form.Label>
              <span className="med-add-text-red">*</span>
              <Form.Control
                type="text"
                placeholder="請輸入地區"
                defaultValue={member[0].area}
                required
                onChange={(e) => {
                  setArea(e.target.value)
                }}
              />
              <Form.Control.Feedback type="invalid">
                請輸入正確的地區
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row> */}
          {/* 電話 */}
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom04">
              <Form.Label>電話</Form.Label>
              <span className="med-add-text-red">*</span>
              <Form.Control
                type="text"
                placeholder="0988888888"
                defaultValue={member[0].member_phone}
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
          {/* <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>出生日期</Form.Label>
              <span className="med-add-text-red">*</span>
              <Form.Control
                type="date"
                placeholder=""
                defaultValue={member[0].birthday}
                required
                onChange={(e) => {
                  setBirthday(e.target.value)
                }}
              />
              <Form.Control.Feedback type="invalid">
                請輸入出生日期
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row> */}
          {/* 性別 */}
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="exampleForm.SelectCustom">
              <Form.Label>性別</Form.Label>
              <span className="med-add-text-red">*</span>
              <Form.Control
                as="select"
                custom
                defaultValue={member[0].member_sex}
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
            <Form.Group as={Col} md="12" controlId="validationCustom06">
              <Form.Label>暱稱</Form.Label>
              <span className="med-add-text-red">*</span>
              <Form.Control
                required
                type="text"
                placeholder="例：小智"
                defaultValue={member[0].member_id}
                onChange={(e) => {
                  setMember_id(e.target.value)
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {/* 自我介紹 */}
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom07">
              <Form.Label>自我介紹</Form.Label>
              <span className="med-add-text-red">*</span>
              <Form.Control
                as="textarea"
                rows={3}
                required
                type="text"
                placeholder="例：我在資策會學習網頁前端"
                defaultValue={member[0].member_aboutme}
                onChange={(e) => {
                  setMember_aboutme(e.target.value)
                }}
              />
            </Form.Group>
          </Form.Row>
          <Button
            type="sumit"
            className="memed-submit"
            onClick={() => {
              updateMember(id)
            }}
          >
            確定
          </Button>
        </Form>
      </>
    )
  )
}

export default MemberEdit
