//會員中心頁連結
import React from 'react'
//import { BrowserRouter as Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HistiryRoute from '../member/ShoppingHistory/HistoryRoute'
import MyTravelBuddies from './MyTravelBuddies/MyTravelBuddies'
import MeFavorites from '../main/MeFavorites'
import Notice from '../../pages/Notice'
import MyAccount from '../member/MyAccount'
function FunctionBar() {
  return (
    //<Router>
    <>
      <div className="functio-bar">
        <Link to="/myAccount">我的帳戶</Link>
        <Link to="h/Stroke">我的行程</Link>
        <Link to="/myAccount/TravelBuddies">我的揪團</Link>
        <Link to="/myAccount/favorites">我的收藏</Link>
        <Link to="/myAccount/Notice">我的通知</Link>
        <Link to="/myAccount/historyOrder">購物紀錄</Link>
      </div>
      <Switch>
        <Route path="/myAccount/historyOrder">
          <HistiryRoute />
        </Route>
        <Route path="/myAccount/TravelBuddies">
          <MyTravelBuddies />
        </Route>
        <Route path="/myAccount/favorites">
          <MeFavorites />
        </Route>
        <Route path="/myAccount/Notice">
          <Notice />
        </Route>
        <Route path="/myAccount" exact>
          <MyAccount />
        </Route>
      </Switch>
    </>
    //</Router>
  )
}

export default FunctionBar
