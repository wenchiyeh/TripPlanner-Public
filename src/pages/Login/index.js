//登入
import React, { useEffect, useState } from 'react'
import { FaUserAlt, FaUnlockAlt, FaFacebook, FaGoogle } from 'react-icons/fa'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import './login.scss'
import { useHistory, Link } from 'react-router-dom'

function Login({ onLogin }) {
  const [loading, setLoading] = useState(false)
  const [timer, setTimer] = useState(null)
  //
  let history = useHistory()
  const [member, setMember] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //驗證表單
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      //event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
      getMember()
    }
    setValidated(true)
  }
  //連結伺服器端
  async function getMember() {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.result) {
          setMember(data.member)
          history.push('/myAccount')
        } else {
          history.push('/login')
        }
      }
    } catch (err) {
      alert('請輸入正確的帳號密碼!')
      console.log(err)
    }
  }
  useEffect(() => {
    if (email.trim() && password.trim()) {
      //trigger();
      setMember({
        type: 'setIsButtonDisabled',
        payload: false,
      })
    } else {
      //clearErrors()
      setMember({
        type: 'setIsButtonDisabled',
        payload: true,
      })
    }
  }, [email, password])
  //要寫useEffect
  useEffect(() => {
    if (member === true) {
      console.log(`登入成功 會員: ${member}`)
      history.push('/login')
    } else {
      //console.log('請重新輸入')
      history.push('/myAccount')
    }
  }, [member])
  return (
    <>
      <body className="body-login">
        <div className="login-form form-group">
          <h1>會員帳號登入</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FaUserAlt />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="您的信箱"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    請輸入正確的信箱格式
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FaUnlockAlt />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="login-input-br"
                    type="text"
                    placeholder="您的密碼"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    請輸入正確的密碼格式
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Button
              type="submit"
              className="login-btn"
              state={loading ? 'loading' : undefined}
              onClick={() => {
                setLoading(true)
                setTimer(
                  setTimeout(
                    () => (onLogin ? onLogin() : setLoading(false)),
                    2000
                  )
                )
              }}
            >
              登入
            </Button>
            <div className="login-samp-text d-flex">
              <span>
                <Link
                  onClick={() => {
                    history.push('/sigon')
                  }}
                >
                  註冊
                </Link>
              </span>
              <span className="login-samp-text-pas">
                <Link
                  onClick={() => {
                    history.push('/forgetpassword')
                  }}
                >
                  忘記密碼
                </Link>
              </span>
            </div>
            <div className="d-flex login-line-center">
              <span className="login-line"></span>
              <h1>OR</h1>
              <span className="login-line"></span>
            </div>
            <div className="login-icon-fa d-flex">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaGoogle />
              </span>
            </div>
          </Form>
        </div>
      </body>
    </>
  )
}
export default Login
