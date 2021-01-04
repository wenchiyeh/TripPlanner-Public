//免費註冊
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function Register(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  //暱稱
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // 目前不合法的欄位有哪些(記錄狀態名稱)
  const [invalidFields, setInvalidFields] = useState([])
  // 按下送出按鈕才開始進入檢查狀態
  const [inChecked, setInChecked] = useState(false)

  let { id } = useParams()
  let history = useHistory()
  //
  async function addMember() {
    //先出現spinner
    //setIsLoading(true)

    // 構造出一個準備要送到伺服器的物件data
    const newMember = {
      name,
      email,
      username,
      password,
    }

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch('http://localhost:5555/users', {
        method: 'post',
        body: JSON.stringify(newMember),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)

        // 設定資料到member狀態
        if (data.id) alert('新增成功')

        history.push('/member')
      }

      // 最後關起spinner，改呈現真正資料
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 3000)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  async function getMember(id) {
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch('http://localhost:5555/users/' + id, {
        method: 'get',
      })

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定到每個欄位
        setEmail(data.email)
        setPassword(data.password)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  // componentDidMount + componentDidUpdate
  useEffect(() => {
    // 共用同一個元件作新增或更新
    if (props.type === 'new') {
      getMember(id)
    }
  }, [props.type, id])
  return (
    <>
      <h1 className="container">註冊</h1>
      <div className="form-group">
        <label htmlFor="nameInput">姓名</label>
        {/* is-invalid為不合法時的樣式，is-valid是合法欄位的樣式 */}
        <input
          type="text"
          className={`form-control ${
            inChecked && invalidFields.includes('name') ? 'is-invalid' : ''
          } ${inChecked && !invalidFields.includes('name') ? 'is-valid' : ''}`}
          id="nameInput"
          aria-describedby="nameInput"
          value={name}
          style={{ width: '300px' }}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        {/* 不合法時出現的提示字詞 */}
        <div id="f1" className="invalid-feedback">
          姓名為必填欄位
        </div>
        <label htmlFor="usernameInput">暱稱</label>
        <input
          type="text"
          className={`form-control ${
            inChecked && invalidFields.includes('email') ? 'is-invalid' : ''
          } ${inChecked && !invalidFields.includes('email') ? 'is-valid' : ''}`}
          id="usernameInput"
          style={{ width: '300px' }}
          aria-describedby="usernameInput"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <div id="f1" className="invalid-feedback">
          暱稱為必填欄位
        </div>
        <label htmlFor="exampleInput">Email</label>
        <input
          type="text"
          className={`form-control ${
            inChecked && invalidFields.includes('email') ? 'is-invalid' : ''
          } ${inChecked && !invalidFields.includes('email') ? 'is-valid' : ''}`}
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
          } ${inChecked && !invalidFields.includes('email') ? 'is-valid' : ''}`}
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
      <button
        className="btn btn-primary "
        onClick={() => {
          // 作檢查
          // 切換已進入檢查
          setInChecked(true)

          const newInvalidFields = []
          if (!name) {
            newInvalidFields.push('name')
          }
          if (!username) {
            newInvalidFields.push('username')
          }
          if (!name) {
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
            addMember()
          }
        }}
      >
        {props.type === 'new' ? '確定' : '確定'}
      </button>
    </>
  )
}

export default Register
