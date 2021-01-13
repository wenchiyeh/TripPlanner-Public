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
  const [isLoading, setIsLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false)
  let isMe = false
  let { itin_id } = useParams()
  let displayView = <></>
  useEffect(() => {
    if (isEmpty) {
      displayView = <h1>查無此行程</h1>
    } else {
      displayView = (
        <div className="itin-editor-frame">
          <ItinEditorHeader
            isEdit={isEdit}
            isPublish={isPublish}
            isMe={isMe}
            title={fakeCardData.title}
          />
          <main className="d-flex justify-content-between">
            <div>
              <ItinEditorBasicData
                isEdit={isEdit}
                isPublish={isPublish}
                memberName={fakeMemberData.member_id}
                avatar={'testImage.jpg'}
                area={'北部'}
                town={'台北'}
              />
              <ItinEditor
                isEdit={false} //任何情況下的publish頁都不需要修改功能
                boxData={fakeTestingData}
              />
            </div>
            <div>
              <ItinEditorDetail isEdit={isEdit} boxData={fakeTestingData} />
            </div>
          </main>
        </div>
      )
    }
  }, [isEmpty])
  if (dataFromDB === []) {
    fetch(`http://localhost:5000/itinerary/${itin_id}`, {
      method: 'get',
      mode: 'cors',
    })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
        if (jsonData[0].member_id === fakeUserId) isMe = true
        if (jsonData.length === 0) setIsEmpty(true)
        segDataFromDB(jsonData)
      })
      .catch((err) => {
        console.log(`err = ${err}`)
        segDataFromDB([fakeCardData, fakeTestingData])
      })
  }

  return isLoading ? <h1>讀取中</h1> : displayView
}

export default ItinPublishView
