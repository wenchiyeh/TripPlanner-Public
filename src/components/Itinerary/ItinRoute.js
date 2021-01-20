import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Itinerary from '../../pages/Itinerary'
import ItinEditView from './ItinEditView'
//測試用
// import SpotBox from './SpotsBox'
import ItinList from './ItinList'
import ItinPublishView from './ItinPublishView'
import BigMap from './BigMap'
// import TestDragEditor from './TestDragEditor'
//

// function Test() {
//   let { itin_id } = useParams()
//   return <h1>{itin_id}</h1>
// }

function ItinRoute() {
  return (
    <>
      <Switch>
        <Route path="/itinerary/my/:itin_id">
          <ItinPublishView isEdit={false} />
          {/* 私人的有大地圖的 */}
        </Route>
        <Route path="/itinerary/view/:itin_id">
          <ItinPublishView isEdit={false} />
          {/* 公開的沒有大地圖的 */}
        </Route>
        <Route path="/itinerary/publish/:itin_id">
          <ItinPublishView isEdit={true} />
          {/* 準備發表用的 */}
        </Route>
        <Route path="/itinerary/new">
          <ItinEditView />
          {/* 準備新增用的 */}
        </Route>
        <Route path="/itinerary/edit/:itin_id">
          <ItinEditView isNew={false} />
          {/* 修改用的 */}
        </Route>
        <Route exact path="/itinerary">
          <Itinerary />
          {/* 行程總表 */}
        </Route>
      </Switch>
    </>
  )
}

export default ItinRoute
// 檔案負責人: 柯政安
