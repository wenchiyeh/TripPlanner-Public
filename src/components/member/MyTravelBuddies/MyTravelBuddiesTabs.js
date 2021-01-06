import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TravelBuddiesMine from './TravelBuddiesMine'
function MyTravelBuddiesTabs() {
  return (
    <>
      <div className="Mef-Tab-style">
        <Tabs
          defaultActiveKey="travelBuddiesMine"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="travelBuddiesMine" title="我的旅行揪團">
            <TravelBuddiesMine />
          </Tab>
          <Tab eventKey="travelBuddiesJoined" title="我參加的揪團"></Tab>
          <Tab eventKey="travelBuddiesHistory" title="歷史紀錄"></Tab>
        </Tabs>
      </div>
    </>
  )
}
export default MyTravelBuddiesTabs
