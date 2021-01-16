import React, { useState, useEffect } from 'react'
import StarRating from '../components/member/StarRating'
import MemberProfile from '../components/member/MemberProfile'
import CalendarApp from '../components/member/CalendarApp'
import FunctionBar from '../components/member/FunctionBar'
import { useHistory, useParams, Switch, Route } from 'react-router-dom'

import HistiryRoute from '../components/member/ShoppingHistory/HistoryRoute'
import MyTravelBuddies from '../components/member/MyTravelBuddies/MyTravelBuddies'
import MeFavorites from '../components/main/MeFavorites'
import Notice from './Notice'
//import MyAccount from '../components/member/MyAccount'

function Member() {
  const [member, setMember] = useState([])
  let { id } = useParams()
  async function getMember() {
    console.log('我在這測試')
    console.log(id)
    console.log('我在這測試')
    try {
      const response = await fetch(`http://localhost:5000/member/${id}`, {
        mode: 'no-cors',
        method: 'post',
      })
      console.log(response)
      if (response.ok) {
        const data = await response.json()
        setMember(data)
        console.log(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getMember()
    console.log('hi')
  }, [])
  useEffect(() => {
    console.log(member)
  }, [member])
  const Loading = <h1>Loading</h1>

  const display = (
    <article className="article">
      <div className="aside">
        <section className="aboutMember">
          <MemberProfile member={member} />
          <StarRating />
          <CalendarApp />
        </section>
        <nav>
          <FunctionBar />
          <Switch>
            <Route path="/myAccount/historyOrder ">
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
            {/* <Route path="/myAccount/myAcclout">
              <MyAccount />
            </Route> */}
          </Switch>
        </nav>
      </div>
    </article>
  )
  return member.length > -1 ? display : Loading
}

export default Member
