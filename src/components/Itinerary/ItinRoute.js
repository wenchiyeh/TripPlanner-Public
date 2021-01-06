import React from 'react'
import { Route, Link, Switch, useParams } from 'react-router-dom'
import Itinerary from '../../pages/Itinerary'
import Header from '../main/Header'
import MyFooter from '../main/MyFooter'
//測試用
import SpotBox from './SpotsBox'
//

function Test() {
  let { id } = useParams()
  return <h1>{id}</h1>
}

function Test2() {
  return (
    <>
      <SpotBox
        isEdit={true}
        type={0}
        title={'測試標題總共寫了十二個字'}
        time1={'10：30'}
        time2={1100}
      />
      <SpotBox
        isEdit={false}
        type={1}
        title={'測試標題測試標題'}
        time1={'10：30'}
        time2={1100}
      />
    </>
  )
}

function ItinRoute() {
  return (
    <>
      <Switch>
        <Route path="/itinerary/view/:id">
          <Test />
        </Route>
        <Route path="/itinerary/test">
          <Test2 />
        </Route>
        <Route exact path="/itinerary">
          <Itinerary />
        </Route>
      </Switch>
    </>
  )
}

export default ItinRoute
// 檔案負責人: 柯政安
