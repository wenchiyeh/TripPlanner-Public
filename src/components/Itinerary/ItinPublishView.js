import React, { useState } from 'react'
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
//
function ItinPublishView({ isEdit = false, isPublish = true, data }) {
  const isMe = false
  const [isSelect, setIsSelect] = useState([-1, -1])
  return (
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
            isEdit={isEdit}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
            boxData={fakeTestingData}
          />
        </div>
        <div>
          <ItinEditorDetail
            isEdit={isEdit}
            isSelect={isSelect}
            boxData={fakeTestingData}
          />
        </div>
      </main>
    </div>
  )
}

export default ItinPublishView
