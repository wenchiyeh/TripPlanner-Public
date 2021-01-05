import React, { useState } from 'react'

import Header from '../components/main/Header'
import MyFooter from '../components/main/MyFooter'
import AddTravelBuddiesForm from '../components/travelBuddy/AddTravelBuddiesForm'

function AddTravelBuddies() {
  return (
    <>
      <Header />
      <AddTravelBuddiesForm />
      <MyFooter />
    </>
  )
}

export default AddTravelBuddies
