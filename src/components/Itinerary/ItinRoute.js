import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Itinerary from '../../pages/Itinerary'
import ItinEditor from './ItinEditor'
//測試用
// import SpotBox from './SpotsBox'
import ItinList from './ItinList'
// import TestDragEditor from './TestDragEditor'
//

function Test() {
  let { id } = useParams()
  return <h1>{id}</h1>
}

// function Test2() {
//   return (
//     <>
//       <SpotBox
//         data={{
//           order: 0,
//           type: 0,
//           title: '測試標題可以幾個字',
//           time: '0900',
//           lat: 24.96517,
//           lng: 121.19192,
//           image: '',
//           info: '',
//         }}
//       />
//       <SpotBox
//         isEdit={false}
//         data={{
//           order: 0,
//           type: 0,
//           title: '測試標題可以幾個字',
//           time: '0900',
//           lat: 24.96517,
//           lng: 121.19192,
//           image: '',
//           info: '',
//         }}
//       />
//     </>
//   )
// }

function ItinRoute() {
  return (
    <>
      <Switch>
        <Route path="/itinerary/view/:id">
          <Test />
        </Route>
        <Route path="/itinerary/test">
          <ItinList />
        </Route>
        <Route path="/itinerary/new">
          <ItinEditor />
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
