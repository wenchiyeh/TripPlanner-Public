import React from 'react'
import { Route, Link, Switch, useParams } from 'react-router-dom'
import ProductList from '../../pages/ProductList'

function Test() {
  let { id } = useParams()
  return <h1>{id}</h1>
}

function ItinRoute() {
  return (
    <Switch>
      <Route path="/travelBuddy/view/:id">
        <Test />
        {/* 自行更換成顯示用的元件，元件內使用import並useParams()可取得:id的值 */}
        {/* 實際做法可參考上方Test元件 */}
      </Route>
      <Route exact path="/travelBuddy">
        <ProductList />
      </Route>
    </Switch>
  )
}

export default ItinRoute
