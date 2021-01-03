//會員新增查改
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './MemberEdit.scss'

function MemberEdit(props) {
  const [isLoading] = useState(false)
  // setIsLoading
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // 目前不合法的欄位有哪些(記錄狀態名稱)
  const [invalidFields, setInvalidFields] = useState([])
  // 按下送出按鈕才開始進入檢查狀態
  const [inChecked, setInChecked] = useState(false)

  let { id } = useParams()
  let history = useHistory()

  async function updateMember(id) {
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
      const response = await fetch('http://localhost:5555/users/' + id, {
        method: 'put',
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
        if (data.id) alert('更新成功')

        history.push('/member')
      }

      //最後關起spinner，改呈現真正資料
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 3000)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

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
        setName(data.name)
        setEmail(data.email)
        setUsername(data.username)
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
    if (props.type === 'edit') {
      getMember(id)
    }
  }, [props.type, id])

  const spinner = (
    <>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  const display = (
    <>
      <div className="form-group member-edit-style d-flex">
        <div className="">
          <label htmlFor="nameInput">姓名</label>
          {/* is-invalid為不合法時的樣式，is-valid是合法欄位的樣式 */}
          <input
            type="text"
            className={`form-control ${
              inChecked && invalidFields.includes('name') ? 'is-invalid' : ''
            } ${
              inChecked && !invalidFields.includes('name') ? 'is-valid' : ''
            }`}
            id="nameInput"
            aria-describedby="nameInput"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          {/* 不合法時出現的提示字詞 */}
          <div id="f1" className="invalid-feedback">
            姓名為必填欄位
          </div>
          <label htmlFor="exampleInput">Email</label>
          <input
            type="text"
            className={`form-control ${
              inChecked && invalidFields.includes('email') ? 'is-invalid' : ''
            } ${
              inChecked && !invalidFields.includes('email') ? 'is-valid' : ''
            }`}
            id="exampleInput"
            aria-describedby="exampleInput"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <div id="f2" className="invalid-feedback">
            Email為必填欄位
          </div>
          <label htmlFor="usernameInput">帳號</label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            aria-describedby="usernameInput"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <label htmlFor="passwordInput">密碼</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            aria-describedby="passwordInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div>
          <label>需要自己往下修改</label>
          <input
            type=""
            className="form-control"
            id=""
            aria-describedby=""
            value=""
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <button
            className="btn btn-primary"
            onClick={() => {
              // 作檢查
              // 切換已進入檢查
              setInChecked(true)

              const newInvalidFields = []

              if (!name) {
                newInvalidFields.push('name')
              }

              if (!email) {
                newInvalidFields.push('email')
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

              if (props.type === 'edit') {
                updateMember(id)
              }
            }}
          >
            {props.type === 'new' ? '新增' : '編輯'}
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <h3 className="memberedit d-flex">
        <span className="memberedit-line-bord"></span>
        個人資料- {props.type === 'new' ? '新增' : '編輯'}
        <span className="memberedit-line-bord"></span>
      </h3>
      {isLoading ? spinner : display}
    </>
  )
}

export default MemberEdit
