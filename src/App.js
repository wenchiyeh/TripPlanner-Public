import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MemberData from './components/MemberData'
import MeFavorites from './components/MeFavorites'

//page
// import Member from './pages/Member'
import Register from './pages/Register'
import Login from './pages/Login'
import MemberEdit from './pages/MemberEdit'
import Notice from './pages/Notice'
function App() {
  return (
    <Router>
      <>
        {/* 註冊 */}
        <Route path="/member/register">
          <Register />
        </Route>
        <Route path="/member/Login">
          <Login />
        </Route>
        <Route path="/member/data/:id?">
          <MemberData />
        </Route>
        {/* 會員管理 - 編輯 */}
        <Route path="/member/edit/:id?">
          <MemberEdit type="edit" />
        </Route>
        {/* 會員管理 - 新增 */}
        <Route path="/member/new">
          <MemberEdit type="new" />
        </Route>
        {/* <Route path="/member">
          <Member />
        </Route> */}
        {/* 表單 */}
        <Route path="/member/notice">
          <Notice />
        </Route>
        {/* 收藏 */}
        <Route path="/member/mefavorites">
          <MeFavorites />
        </Route>
      </>
    </Router>
  )
}

export default App
