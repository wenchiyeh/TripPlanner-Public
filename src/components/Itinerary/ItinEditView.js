import React from 'react'
// import { useParams } from 'react-router-dom'
import ItinEditorHeader from './ItinEditorHeader'
import ItinEditor from './ItinEditor'
import BigMap from './BigMap'

function ItinEditView({ isNew = true }) {
  const displayNewView = (
    <div className="itin-editview-wrapper">
      <BigMap />
      <ItinEditorHeader
        isEdit={true}
        isPublish={false}
        isMe={true}
        // title={dataFromDB[0].title}
      />

      <ItinEditor
        isEdit={true}
        // boxData={dataFromDB[1]}
      />
    </div>
  )
  const displayEditView = <></>
  return isNew ? displayNewView : displayEditView
}

export default ItinEditView
