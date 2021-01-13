import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItinEditorHeader from './ItinEditorHeader'
import ItinEditorBasicData from './itinEditorBasicData'
import ItinEditor from './ItinEditor'
import ItinEditorDetail from './ItinEditorDetail'
//測試用假資料區
import fakeTestingData from './testBoxData' //純box陣列
let memberData = require('../member/member.json')
let fakeMemberData = memberData[2].data[0] //純member陣列
let cardData = require('./testJsonData.json')
let fakeCardData = cardData[2].data[0] //純行程陣列
let fakeUserId = 0 //預設使用者為0號
//
function ItinPublishView({ isEdit = false, isPublish = true }) {
  const [dataFromDB, segDataFromDB] = useState([])
  const [isLoading, setIsLoading] = useState(1)
  let isMe = false
  let { itin_id } = useParams()
  async function getDataFromDB() {
    console.log('doFetch')
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
        setTimeout(() => {
          if (data.length === 0) {
            setIsLoading(3)
          } else {
            setIsLoading(0)
          }
        }, 0)
        console.log(data)
      }
    } catch (err) {
      console.log('fetch err')
    }
  }
  const displayView = dataFromDB.length > 0 && (
    <div className="itin-editor-frame">
      <ItinEditorHeader
        isEdit={isEdit}
        isPublish={isPublish}
        isMe={isMe}
        title={dataFromDB[0].title}
      />
      <main className="d-flex justify-content-between">
        <div>
          <ItinEditorBasicData
            isEdit={isEdit}
            isPublish={isPublish}
            memberName={dataFromDB[0].member_name}
            avatar={'testImage.jpg'}
            area={'北部'}
            town={'台北'}
          />
          <ItinEditor
            isEdit={false} //任何情況下的publish頁都不需要修改功能
            boxData={dataFromDB[1]}
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
