import React, { useState, useEffect } from 'react'
import StarRating from '../components/member/StarRating'
import MemberProfile from '../components/member/MemberProfile'
import CalendarApp from '../components/member/CalendarApp'
import FunctionBar from '../components/member/FunctionBar'
import { useHistory } from 'react-router-dom'
import { useParams, Switch, Route, Link } from 'react-router-dom'

// import HistiryRoute from '../components/member/ShoppingHistory/HistoryRoute'
// import MyTravelBuddies from '../components/member/MyTravelBuddies/MyTravelBuddies'
// import MeFavorites from '../components/main/MeFavorites'
// import Notice from './Notice'
// import MyAccount from '../components/member/MyAccount'

// 這裡去寫 member使用者名稱
// document.addEventListener('DOMContentLoaded', function () {
//   const userName = sessionStorage.getItem('')
//   if (userName == null) {
//     window.location = '/login'
//   }
// })
function Member() {
  const [isLoading, setIsLoading] = useState(true)
  const [member, setMember] = useState([])
  // setIsLoading(true)
  async function getMember(id) {
    try {
      const response = await fetch(`http://localhost:5000/member/${id}`, {
        //mode: 'no-cors',
        mode: 'cors',
        method: 'get',
      })
      console.log(response)
      if (response.ok) {
        const data = await response.json()
        setMember(data)
        console.log('memberdata:', data)
        // 最後關起spinner，改呈現真正資料
        setTimeout(() => {
          setIsLoading(false)
        }, 0)
      }
    } catch (err) {
      // alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  // async function getMember(id) {
  //   try {
  //     const response = await fetch(`http://localhost:5000/member/${id}`, {
  //       //mode: 'no-cors',
  //       mode: 'cors',
  //       method: 'get',
  //     })
  //     console.log(response)
  //     if (response.ok) {
  //       const data = await response.json()
  //       setMember(data)
  //       console.log('memberdata:', data)
  //       // 最後關起spinner，改呈現真正資料
  //       setTimeout(() => {
  //         // setIsLoading(false)
  //       }, 3000)
  //     }
  //   } catch (err) {
  //     // alert('無法得到伺服器資料，請稍後再重試')
  //     console.log(err)
  //   }
  // }
  useEffect(() => {
    getMember(localStorage.getItem('userid'))
    // console.log('me有資料嗎?', member)
  }, [])

  const Loading = <h1>Loading</h1>

  const display = (
    <>
      <article className="article">
        <div className="aside">
          <section className="aboutMember">
            <MemberProfile member={member} />
            <StarRating />
            <CalendarApp />
          </section>
          <nav>
            <FunctionBar />
          </nav>
        </div>
      </article>
    </>
  )
  return <>{isLoading ? Loading : display}</>
}

export default Member
