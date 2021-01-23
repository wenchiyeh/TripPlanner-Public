//google 登出
import React from 'react'
import { useGoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router-dom'

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com'

function LogoutHooks() {
  let history = useHistory()
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success')
    // alert('Logged out Successfully ✌')
    history.push('/')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  )
}

export default LogoutHooks
