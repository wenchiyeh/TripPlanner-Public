//登入
import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'

import Register from '.././pages/Register'
//import { useParams, useHistory } from 'react-router-dom'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // 目前不合法的欄位有哪些(記錄狀態名稱)
  const [invalidFields, setInvalidFields] = useState([])
  // 按下送出按鈕才開始進入檢查狀態
  const [inChecked, setInChecked] = useState(false)

  // let { id } = useParams()
  // let history = useHistory()
  return (
    <>
      <body className="body-login">
        <h1 className="container">登入</h1>
        <div className="form-group">
          <label htmlFor="exampleInput">Email</label>
          <input
            type="text"
            className={`form-control ${
              inChecked && invalidFields.includes('email') ? 'is-invalid' : ''
            } ${
              inChecked && !invalidFields.includes('email') ? 'is-valid' : ''
            }`}
            id="exampleInput"
            style={{ width: '300px' }}
            aria-describedby="exampleInput"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <div id="f2" className="invalid-feedback">
            Email為必填欄位
          </div>
          <label htmlFor="passwordInput">密碼</label>
          <input
            type="password"
            className={`form-control ${
              inChecked && invalidFields.includes('email') ? 'is-invalid' : ''
            } ${
              inChecked && !invalidFields.includes('email') ? 'is-valid' : ''
            }`}
            id="passwordInput"
            style={{ width: '300px' }}
            aria-describedby="passwordInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <div id="f1" className="invalid-feedback">
            密碼為必填欄位
          </div>
        </div>
        <small>
          <Link to="/register">註冊</Link>
          <Route path="/register">
            <Register />
          </Route>
        </small>
        <button
          className="btn btn-primary "
          onClick={() => {
            // 作檢查
            // 切換已進入檢查
            setInChecked(true)

            const newInvalidFields = []
            if (!email) {
              newInvalidFields.push('email')
            }
            if (!password) {
              newInvalidFields.push('password')
            }
            //設定檢查的樣式
            setInvalidFields(newInvalidFields)

            // 如果有錯誤則不送出
            if (newInvalidFields.length > 0) {
              return
            }

            if (props.type === 'new') {
              //addMember()
            }
          }}
        >
          {props.type === 'new' ? '確定' : '確定'}
        </button>
      </body>
    </>
  )
}

export default Login
