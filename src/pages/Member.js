import React from 'react'
import StarRating from '../components/member/StarRating'
import MemberProfile from '../components/member/MemberProfile'
import CalendarApp from '../components/member/CalendarApp'
import FunctionBar from '../components/member/FunctionBar'
function Member() {
  return (
    <>
      <article className="article">
        <div className="aside">
          <section className="aboutMember">
            <MemberProfile />
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
}

export default Member

//這是會員的共用項目 Ray
//這裡要麵包屑嗎？
