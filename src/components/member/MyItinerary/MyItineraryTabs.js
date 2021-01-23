import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function MyItineraryTabs() {
  return (
    <>
      <div className="Mef-Tab-style">
        <Tabs
          defaultActiveKey="travelBuddiesMine"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="travelBuddiesMine" title="我的行程表"></Tab>
          <Tab eventKey="travelBuddiesJoined" title="未發表行程"></Tab>
          <Tab eventKey="travelBuddiesJoined" title="已發表行程"></Tab>
        </Tabs>
      </div>
    </>
  )
}
export default MyItineraryTabs
