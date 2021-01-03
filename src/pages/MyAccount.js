//我的帳戶
import React from 'react'
import LineChart from '../components/member/LineChart'
import Ingroup from '../components/member/Ingroup'

function MyAccount() {
  return (
    <>
      <div className="notice-style">
        <h4 className="MyAccount-title">收藏行程的人數：</h4>
        <LineChart />
      </div>
      <div className="notice-style">
        <h4 className="MyAccount-title">正在參加的揪團：</h4>
        <Ingroup />
      </div>
    </>
  )
}
export default MyAccount
