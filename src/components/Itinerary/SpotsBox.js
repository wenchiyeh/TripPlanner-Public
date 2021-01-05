import React, { useState } from 'react'

function SpotsBox(props) {
  const { isEdit, type, title, time1, time2 } = props
  const displyEdit = (
    <>
      <div className="spotsbox-wrapper">
        <div className="spotsbox-type"></div>
        <div className="spotsbox-content">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </>
  )
  const displyConst = (
    <>
      <div className="spotsbox-wrapper">
        <div className="spotsbox-type"></div>
        <div className="spotsbox-content">
          <h4>{title}</h4>
          <h4>
            {time1}
            {time2}
          </h4>
        </div>
      </div>
    </>
  )
  return <>{isEdit ? displyEdit : displyConst}</>
}

export default SpotsBox
// 檔案負責人: 柯政安
