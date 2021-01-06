import React from 'react'
import SpotsBox from './SpotsBox'
import { Button } from 'react-bootstrap'
import { FaTimesCircle } from 'react-icons/fa'

// SpotsBox({ isEdit, type = 0, title, time1, time2 })
//測試用假資料
import fakeTestingData from './testBoxData'

function ItinEditor({ boxData = fakeTestingData }) {
  return (
    <>
      <div className="itin-editor-wrapper">
        <div className="itin-editor-title">
          <p>行程表製作</p>
          <input
            className="form-custom"
            type="text"
            placeholder="請輸入行程標題"
          />
        </div>
        {boxData.map((data, index) => (
          <div key={index}>
            <div className="itin-editor-daybox d-flex justify-content-between align-items-center">
              <span>{data.title}</span>
              <span className="box-close-btn">
                <FaTimesCircle size={26} />
              </span>
            </div>
            <div className="itin-editor-spotsWapper">
              {data.data.map((element, index) => (
                <SpotsBox key={index} data={element} />
              ))}
              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={() => {}}>
                  +行程
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItinEditor
