import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ItinEditorHeader from './ItinEditorHeader'
import ItinEditor from './ItinEditor'
import DisplayMap from './DisplayMap'

function MyItinView() {
  const [isLoading, setIsLoading] = useState(1)
  const [dataFromDB, setDataFromDB] = useState([])
  const [center, setCenter] = useState({ lat: '', lng: '' })
  const [title, setTitle] = useState()
  let { itin_id } = useParams()
  let history = useHistory()
  //取得行程資料
  async function getDataFromDB() {
    try {
      const response = await fetch(
        `http://localhost:5000/itinerary/${itin_id}`,
        {
          method: 'get',
          mode: 'cors',
        }
      )
      if (response.ok) {
        const data = await response.json()
        let laglng = {
          lat: data[1][0].data[0].lat,
          lng: data[1][0].data[0].lng,
        }
        setTitle(data[0].title)
        setDataFromDB(data[1])
        setCenter(laglng)
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
  useEffect(() => {
    getDataFromDB()
  }, [])
  function handleSubmit() {
    history.push(`/itinerary/publish/${itin_id}`)
  }

  const display = (
    <div className="itin-editview-wrapper">
      <DisplayMap boxData={dataFromDB} center={center} />
      <ItinEditorHeader
        isEdit={false}
        isPublish={false}
        title={title}
        handleSubmit={handleSubmit}
      />
      <ItinEditor isEdit={false} tempData={dataFromDB} />
    </div>
  )

  if (isLoading === 1) {
    return <h1>讀取中</h1>
  } else if (isLoading === 0) {
    return display
  } else {
    return <h1>查無資料</h1>
  }
}

export default MyItinView
