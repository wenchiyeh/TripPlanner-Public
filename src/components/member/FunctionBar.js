//會員中心頁連結
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Shoppinghistory from './ShoppingHistory'

import MeFavorites from '../main/MeFavorites'
import Notice from '../../pages/Notice'
import MyAccount from '../member/MyAccount'
function FunctionBar() {
  return (
    <Router>
      <>
        <div className="functio-bar">
          <Link to="/myAccount">我的帳戶</Link>
          <Link to="/myStroke">我的行程</Link>
          <Link to="/myGroup">我的揪團</Link>
          <Link to="/mefavorites">我的收藏</Link>
          <Link to="/myNotice">我的通知</Link>
          <Link to="/shoppinghistory">購物紀錄</Link>
        </div>
        <Switch>
          <Route path="/shoppinghistory">
            <Shoppinghistory />
          </Route>
          <Route path="/myAccount">
            <MyAccount />
          </Route>
          <Route path="/mefavorites">
            <MeFavorites />
          </Route>
          <Route path="/myNotice">
            <Notice />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default FunctionBar
