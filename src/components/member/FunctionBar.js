import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MeFavorites from '../main/MeFavorites'
//import MemberEdit from '../../pages/MemberEdit'
import Notice from '../../pages/Notice'
//import MemberInput from '../member/MemberInput'
function FunctionBar() {
  return (
    <Router>
      <>
        <div className="FunctionBar">
          <Link to="/myAccount">我的帳戶</Link>
          <Link to="/myStroke">我的行程</Link>
          <Link to="/myGroup">我的揪團</Link>
          <Link to="/mefavorites">我的收藏</Link>
          <Link to="/myNotice">我的通知</Link>
          <Link to="/shoppingRecord">購物紀錄</Link>
        </div>
        {/* <Route path="/myAccount">
          <MemberInput />
        </Route> */}
        <Route path="/mefavorites">
          <MeFavorites />
        </Route>
        <Route path="/myNotice">
          <Notice />
        </Route>
        {/* <Route path="/member/edit/:id?">
          <MemberEdit />
        </Route> */}
        <Switch></Switch>
      </>
    </Router>
  )
}

export default FunctionBar
