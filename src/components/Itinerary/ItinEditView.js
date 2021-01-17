import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import ItinEditorHeader from './ItinEditorHeader'
import ItinEditor from './ItinEditor'
import BigMap from './BigMap'

function ItinEditView({ isNew = true }) {
  const [dataFromUser, setDataFromUser] = useState([])
  const displayNewView = (
    <div className="itin-editview-wrapper">
      <BigMap dataFromUser={dataFromUser} setDataFromUser={setDataFromUser} />
      <ItinEditorHeader
        isEdit={true}
        isPublish={false}
        isMe={true}
        dataFromUser={dataFromUser}
      />
      <ItinEditor
        isEdit={true}
        dataFromUser={dataFromUser}
        setDataFromUser={setDataFromUser}
      />
    </div>
  )
  const displayEditView = <></>
  return isNew ? displayNewView : displayEditView
}

export default ItinEditView
