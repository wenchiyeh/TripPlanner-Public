import React from 'react'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import StarRating from './components/main/StarRating'
import MemberList from './components/main/MemberList'
import CalendarApp from './components/main/CalendarApp'

function App() {
  return (
    <>
      <Header />
      <MemberList />
      <StarRating />
      <CalendarApp />
      <Footer />
    </>
  )
}

export default App
