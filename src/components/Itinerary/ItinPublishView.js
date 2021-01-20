import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItinEditorHeader from './ItinEditorHeader'
import ItinEditorBasicData from './itinEditorBasicData'
import ItinEditor from './ItinEditor'
import ItinEditorDetail from './ItinEditorDetail'
//測試用假資料區
// import fakeTestingData from './testBoxData' //純box陣列
// let memberData = require('../member/member.json')
// let fakeMemberData = memberData[2].data[0] //純member陣列
// let cardData = require('./testJsonData.json')
// let fakeCardData = cardData[2].data[0] //純行程陣列
// let fakeUserId = 0 //預設使用者為0號
//
function ItinPublishView({ isEdit = false }) {
  const [dataFromDB, segDataFromDB] = useState([])
  const [isLoading, setIsLoading] = useState(1)
  const [isPublish, setIsPublish] = useState(true)
  let isMe = false
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
        segDataFromDB(data)
        console.log(`isPublish = ${data[0].publish_time}`)
        if (data[0].publish_time === null) {
          setIsPublish(false)
        }
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
  function handleDataToDB() {
    console.log('publish!')
  }
  const displayView = dataFromDB.length > 0 && (
    <div className="itin-editor-frame">
      <ItinEditorHeader
        isEdit={isEdit}
        isPublish={!isPublish}
        isMe={isMe}
        title={dataFromDB[0].title}
        handleSubmit={handleDataToDB}
      />
      <main className="d-flex justify-content-between">
        <div>
          <ItinEditorBasicData
            isEdit={isEdit}
            isPublish={isPublish}
            memberName={dataFromDB[0].member_name}
            avatar={`member_${dataFromDB[0].member_id}.jpg`}
            area={dataFromDB[0].region}
            town={dataFromDB[0].location}
          />
          <ItinEditor
            isEdit={false} //任何情況下的publish頁都不需要修改功能
            tempData={dataFromDB[1]}
          />
        </div>
        <div>
          <ItinEditorDetail isEdit={isEdit} boxData={dataFromDB[1]} />
        </div>
      </main>
    </div>
  )

  useEffect(() => {
    getDataFromDB()
  }, [])

  if (isLoading === 0) {
    return displayView
  } else if (isLoading === 1) {
    return <h1>讀取中</h1>
  } else {
    return <h1>查無此行程</h1>
  }
}

export default ItinPublishView
