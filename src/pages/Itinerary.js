import React, { useState, useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
//
import MyBreadCrumb from '../components//main/MyBreadCrumb/MyBreadCrumb'
import SearchBar from '../components//main/SearchBar'
import CardListPublic from '../components//main/CardListPublic'
import Pages from '../components//main/Pages'
import Carousel from '../components/TravelBuddies/Carousel'

function Itinerary(props) {
  const [searchFilter, setSearchFilter] = useState({})
  const [dataFromDB, segDataFromDB] = useState([])
  const [isLoading, setIsLoading] = useState(1)
  let history = useHistory()
  function createItinerary() {
    history.push('/itinerary/new')
  }
  useEffect(() => {
    console.log(searchFilter)
    getDataFromDB()
  }, [searchFilter])
  async function getDataFromDB() {
    try {
      const response = await fetch(
        `http://localhost:5000/itinerary?` + new URLSearchParams(searchFilter),
        {
          method: 'get',
          mode: 'cors',
        }
      )
      if (response.ok) {
        const data = await response.json()
        segDataFromDB(data)
        console.log('data = ', data)
        setTimeout(() => {
          if (data.length === 0) {
            setIsLoading(3)
          } else {
            setIsLoading(0)
          }
        }, 0)
      }
    } catch (err) {
      console.log('fetch err')
    }
  }

  const displayView = (
    <>
      <div className="container itin-close-wrap">
        <MyBreadCrumb />
        <div className="d-flex justify-content-between">
          <h1>行程規劃</h1>
          <Button variant="info" size="sm" onClick={createItinerary}>
            建立行程
          </Button>
        </div>
      </div>
      <Carousel />
      <div className="container">
        <Col md={12}>
          <SearchBar setSearchFilter={setSearchFilter} />
        </Col>
        <CardListPublic data={dataFromDB} type="itinerary" />
        <Pages />
      </div>
    </>
  )

  if (isLoading === 0) {
    return displayView
  } else if (isLoading === 1) {
    return <h1>讀取中</h1>
  } else {
    return <h1>查無行程</h1>
  }
}

export default Itinerary
// 檔案負責人: 柯政安
