import React, { useState } from 'react'
import ItinEditorHeader from './ItinEditorHeader'
import SpotsBox from './SpotsBox'
import { Button } from 'react-bootstrap'
import { FaTimesCircle } from 'react-icons/fa'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
//
//測試用假資料
import fakeTestingData from './testBoxData'

function ItinEditor({ isEdit = false, boxData = fakeTestingData }) {
  const [tempData, setTempData] = useState(boxData)
  //處理bar開關
  const classIsClose = [
    'itin-editor-daybox d-flex justify-content-between align-items-center',
    'itin-editor-daybox d-flex justify-content-between align-items-center daybox-close',
  ]
  //處理box選擇
  const classIsSelect = ['testDragBox', 'testDragBox box-select']
  //拖曳後處理數據
  function handleOnDragEnd(result) {
    if (!result.destination) return
    const wrapSourceIndex = result.source.droppableId.substring(4)
    const wrapDestinIndex = result.destination.droppableId.substring(4)
    const originArray = Array.from(tempData)
    const [reorderItem] = originArray[wrapSourceIndex].data.splice(
      result.source.index,
      1
    )
    originArray[wrapDestinIndex].data.splice(
      result.destination.index,
      0,
      reorderItem
    )
    setTempData(originArray) //當下所有數據
    // console.log(originArray)
  }
  const displayEdit = (
    <div className="itin-editor-wrapper">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {tempData.map((data, dayIndex) => (
          <div key={dayIndex}>
            <div
              onClick={(e) => {
                if (e.target.className === classIsClose[0]) {
                  e.target.className = classIsClose[1]
                } else if (e.target.className === classIsClose[1]) {
                  e.target.className = classIsClose[0]
                } else {
                  return
                }
              }}
              className={classIsClose[0]}
            >
              <span>{data.title}</span>
              <span className="box-close-btn">
                <FaTimesCircle size={26} />
              </span>
            </div>
            <Droppable droppableId={'wrap' + dayIndex}>
              {(provided) => (
                <div
                  className="itin-editor-spotsWapper"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {data.data.map((element, index) => (
                    <div key={index}>
                      <Draggable
                        draggableId={'box' + dayIndex + index}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className={classIsSelect[0]}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <SpotsBox
                              index={[dayIndex, index]}
                              data={element}
                              isEdit={isEdit}
                              allData={tempData}
                              doEdit={setTempData}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                  {provided.placeholder}
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" onClick={() => {}}>
                      +行程
                    </Button>
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  )
  const displayNotEdit = (
    <div className="itin-editor-wrapper">
      {tempData.map((data, dayIndex) => (
        <div key={dayIndex}>
          <div
            onClick={(e) => {
              if (e.target.className === classIsClose[0]) {
                e.target.className = classIsClose[1]
              } else if (e.target.className === classIsClose[1]) {
                e.target.className = classIsClose[0]
              } else {
                return
              }
            }}
            className={classIsClose[0]}
          >
            <span>{data.title}</span>
            <span className="box-close-btn">
              <FaTimesCircle size={26} />
            </span>
          </div>
          <div className="itin-editor-spotsWapper">
            {data.data.map((element, index) => (
              <div
                key={index}
                className={classIsSelect[0]}
                onClick={(e) => {
                  if (document.querySelector('.box-select')) {
                    document.querySelector('.box-select').className =
                      classIsSelect[0]
                    document
                      .querySelectorAll('.itin-detailPicText-show')
                      .forEach((element) => {
                        element.classList.remove('itin-detailPicText-show')
                      })
                  }
                  e.currentTarget.className = classIsSelect[1]
                  document
                    .querySelector(`.boxInfo${dayIndex}${index}`)
                    .classList.add('itin-detailPicText-show')
                  document
                    .querySelector(`.dayTitle${dayIndex}`)
                    .classList.add('itin-detailPicText-show')
                }}
              >
                <SpotsBox
                  index={[dayIndex, index]}
                  data={element}
                  isEdit={isEdit}
                  allData={tempData}
                  doEdit={setTempData}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  return isEdit ? displayEdit : displayNotEdit
}

export default ItinEditor
// 檔案負責人: 柯政安
