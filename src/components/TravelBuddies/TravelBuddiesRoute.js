import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import TravelBuddiesMainPage from '../../pages/TravelBuddiesMainPage'
import TravelBuddiesChatroom from '../../pages/TravelBuddiesChatroom'
import ProductList from '../../pages/ProductList'

function Test() {
  let { id } = useParams()
  return <h1>{id}</h1>
}

function TravelBuddiesRoute() {
  return (
    <Switch>
      <Route path="/travelBuddy/view/:id">
        <Test />
        {/* 自行更換成顯示用的元件，元件內使用import並useParams()可取得:id的值 */}
        {/* 實際做法可參考上方Test元件 */}
      </Route>
      <Route exact path="/travelBuddies/chatroom">
        <TravelBuddiesChatroom />
      </Route>
      <Route exact path="/travelBuddies">
        <TravelBuddiesMainPage />
      </Route>
    </Switch>
  )
}

export default TravelBuddiesRoute
