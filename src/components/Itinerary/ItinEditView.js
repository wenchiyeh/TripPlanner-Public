import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ItinEditorHeader from './ItinEditorHeader'
import ItinEditor from './ItinEditor'
import BigMap from './BigMap'

function ItinEditView({ isNew = true }) {
  const [dataFromUser, setDataFromUser] = useState([
    { title: '第 1 日', data: [] },
  ])
  const [isLoading, setIsLoading] = useState(1)
  const [title, setTitle] = useState()
  let { itin_id } = useParams()
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
        setTitle(data[0].title)
        setDataFromUser(data[1])
        console.log(data[1])
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
    if (!isNew) {
      getDataFromDB()
    }
  }, [])
  const displayNewView = (
    <div className="itin-editview-wrapper">
      <BigMap dataFromUser={dataFromUser} setDataFromUser={setDataFromUser} />
      <ItinEditorHeader
        isEdit={true}
        isPublish={false}
        isMe={true}
        title={title}
      />
      <ItinEditor
        isEdit={true}
        tempData={dataFromUser}
        setTempData={setDataFromUser}
        // dataFromUser={dataFromUser}
        // setDataFromUser={setDataFromUser}
      />
    </div>
  )
  // const displayEditView = <></>
  // return isNew ? displayNewView : displayEditView
  if (isNew) {
    return displayNewView
  } else {
    if (isLoading === 1) {
      return <h1>讀取中</h1>
    } else if (isLoading === 0) {
      return displayNewView
    } else {
      return <h1>查無資料</h1>
    }
  }
}

export default ItinEditView
