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
  const [dataFromDB, setgDataFromDB] = useState([])
  const [dataToDB, setDataToDB] = useState()
  const [isLoading, setIsLoading] = useState(1)
  const [isPublish, setIsPublish] = useState(true)
  const fs = require('fs')
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
        setgDataFromDB(data)
        console.log(`isPublish = ${data[0].publish_time}`)
        console.log(data)
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
    let dataReadyToSend = []
    let dataItin = {
      id: dataFromDB[1][0].data[0].itinerary_id,
      info: document.querySelector('.itin-basicdata-text').value,
      imageIndex:
        '-1' && document.querySelector('input[name="itin-kv"]:checked').value,
    }
    let dataBox = []
    for (let i = 0; i < dataFromDB[1].length; i++) {
      console.log(`day ${i}`)
      for (let j = 0; j < dataFromDB[1][i].data.length; j++) {
        console.log(`day ${i} box ${j}`)
        let url = `/images/boxImage/itin${dataFromDB[1][i].data[j].itinerary_id}-${i}-${j}`
        if (document.querySelector(`.PicInfo${i}${j}`)) {
          let imageData = document.querySelector(`.PicInfo${i}${j}`).src
          let data64 = imageData.replace(/^data:image\/\w+;base64,/, '')
          let dataBuffer = new Buffer.from(data64, 'base64')
          fs.writeFile(url, dataBuffer, function (err) {
            if (err) {
              console.log('fail')
            } else {
              console.log('success')
            }
          })
        }
        let text = document.querySelector(`.textarea-${i}${j}`).value
        dataBox.push({
          index: `${i}${j}`,
          image: url,
          text: text,
        })
      }
    }
    dataReadyToSend = [dataItin, dataBox]
    console.log('publish!')
    console.log(dataReadyToSend)
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
