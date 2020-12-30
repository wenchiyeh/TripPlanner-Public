import React from 'react'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import StarRating from './components/main/StarRating'
import MemberList from './components/main/MemberList'
import CalendarApp from './components/main/CalendarApp'
import FunctionBar from './components/main/FunctionBar'

function App() {
  return (
    <>
      <Header />
      <article>
        <section>
          <MemberList />
          <StarRating />
          <CalendarApp />
        </section>
        <nav>
          <FunctionBar />
        </nav>
      </article>
      <Footer />
    </>
  )
}

export default App
