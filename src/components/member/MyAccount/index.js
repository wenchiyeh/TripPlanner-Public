//我的帳戶
import React, { useState, useEffect } from 'react'

import LineChart from '.././LineChart'
import Ingroup from '.././Ingroup'
import './MyAccount.scss'

function MyAccount() {
  const [metbJoined, setMetbJoined] = useState([])

  async function gettbJoined(props) {
    try {
      const response = await fetch('http://localhost:5000/meFavoritesgroup', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setMetbJoined(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  useEffect(() => {
    gettbJoined()
  }, [])
  return (
    <>
      <div className="notice-style">
        <h4 className="MyAccount-title">收藏行程的人數：</h4>
        <LineChart />
      </div>
      <div className="notice-style">
        <h4 className="MyAccount-title">正在參加的揪團：</h4>
        <Ingroup metbJoined={metbJoined} />
      </div>
    </>
  )
}
export default MyAccount
