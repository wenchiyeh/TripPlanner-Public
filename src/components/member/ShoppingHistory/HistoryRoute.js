import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ShoppingHistory from './ShoppingHistory'
// import { Historydata } from './Historydata'
import Detail from './Detail'

function HistiryRoute() {
  return (
    <Switch>
      <Route path="/myAccount/historyOrder/:id">
        <Detail />
        {/* 自行更換成顯示用的元件，元件內使用import並useParams()可取得:id的值 */}
        {/* 實際做法可參考上方Test元件 */}
      </Route>
      <Route exact path="/myAccount/historyOrder">
        <ShoppingHistory />
      </Route>
    </Switch>
  )
}

export default HistiryRoute
