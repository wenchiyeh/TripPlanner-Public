import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Itinerary from '../../pages/Itinerary'
import ItinEditView from './ItinEditView'
import ItinEditor from './ItinEditor'
//測試用
// import SpotBox from './SpotsBox'
import ItinList from './ItinList'
import ItinPublishView from './ItinPublishView'
// import TestDragEditor from './TestDragEditor'
//

function Test() {
  let { itin_id } = useParams()
  return <h1>{itin_id}</h1>
}

function ItinRoute() {
  return (
    <>
      <Switch>
        <Route path="/itinerary/view/:itin_id">
          <ItinPublishView isEdit={false} isPublish={true} />
        </Route>
        <Route path="/itinerary/publish/:itin_id">
          <ItinPublishView isEdit={true} isPublish={true} />
        </Route>
        <Route path="/itinerary/test">
          <ItinList />
        </Route>
        <Route path="/itinerary/new">
          <ItinEditView />
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
