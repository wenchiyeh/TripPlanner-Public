//忘記密碼
import React, { Component } from 'react'
import { FaUserAlt, FaFacebook, FaGoogle } from 'react-icons/fa'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import '../pages/sign/sign.scss'

const title = {
  pageTitle: 'Forgot Password Screen',
}
class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  sendEmail = async (e) => {
    e.preventDefault()
    const { email } = this.state
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      })
    } else {
      try {
        const response = await fetch('http://localhost:5000/forgotPassword', {
          method: 'post',
        })
        console.log(response.data)
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          })
        }
      } catch (error) {
        console.error(error.response.data)
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          })
        }
      }
    }
  }
  //
  // const [validated, setValidated] = useState(false)

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   setValidated(true)
  // }

  render() {
    const { email, messageFromServer, showNullError, showError } = this.state
    return (
      <>
        <body className="body-sigon">
          <div className="sogin-form form-group">
            <h1 title={title}>忘記密碼</h1>
            <Form noValidate onSubmit={this.sendEmail}>
              {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="10"
                  controlId="validationCustomUsername"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaUserAlt />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      id="email"
                      type="email"
                      value={email}
                      label="email"
                      placeholder="您的信箱"
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={this.handleChange('email')}
                    />
                    <Form.Control.Feedback type="invalid">
                      請輸入正確的信箱格式
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Button
                type="submit"
                className="login-btn"
                // buttonStyle={forgotButton}
                buttonText="Send Password Reset Email"
              >
                送出
              </Button>
              <div className="sogin-samp-text d-flex">
                <span>
                  <a href="http://localhost:3000/login">登入</a>
                </span>
              </div>
              <div className="d-flex sogin-line-center">
                <span className="sogin-line"></span>
                <h1>OR</h1>
                <span className="sogin-line"></span>
              </div>
              <div className="sogin-icon-fa d-flex">
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
}
export default Login
