//google 登入
import React, { useEffect } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken'

const clientId =
  '1019700386473-hp6eatl7oegfmhgb74u4n5afmgqtla4r.apps.googleusercontent.com'

function LoginHooks() {
  // const [newAuthRes, serNewAuthRes] = useState()
  // const id_token = ''
  // JSON.parse(localStorage.setItem('authToken', newAuthRes))
  let history = useHistory()
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj)
    // alert(`Logged in successfully welcome ${res.profileObj.name}`)
    console.log('Google登入成功', res)
    console.log('Google登入成功2', res.profileObj.name)
    refreshTokenSetup(res)
    if (res.profileObj.name === 'yushen liao') {
      console.log('Google登入成功2', res.profileObj.name)
      history.push('/')
    }

    //success
    // let str = JSON.stringify(res.result) //將物件列化成string，方便顯示結果在畫面上
    //顯示授權你網站存取的用戶個資
    // document.getElementById('content').innerHTML = str
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    )
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    responseType: 'code',
    prompt: 'consent',
  })

  useEffect(() => {}, [])
  return (
    <>
      <FaGoogle onClick={signIn} alt="google login" />
    </>
    // <button onClick={signIn} className="button" {}>
    // {/* <img src="icons/google.svg" alt="google login" className="icon"></img> */}

    // {/* <span className="buttonText">Sign in with Google</span> */}
    // {/* </button> */}
  )
}

export default LoginHooks
