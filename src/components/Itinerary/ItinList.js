import React from 'react'
// import Card from '../main/Card'
// import TestWrap from '../main/TestWrap'
// import SearchBar from '../main/SearchBar'
// import CardListPublic from '../main/CardListPublic'
import SpotsBox from './SpotsBox'
import ItinEditorBar from './ItinEditorBar'

//
//
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function ItinList() {
  // const searchTest = <SearchBar />
  // let cardData = require('./testJsonData.json')
  // const cardTest = (
  //   <Card
  //     title={'新北耶誕'}
  //     text={-1}
  //     location={'中壢市'}
  //     image={'testImage.jpg'}
  //     time1={'2020/12/24'}
  //     time2={'2020/12/25'}
  //     duration={3}
  //     price={-1}
  //     person={'王大明'}
  //     like={222}
  //     mark={222}
  //   />
  // )
  let testArr = [
    { id: '1', title: 'test1', content: 'con1' },
    { id: '2', title: 'test2', content: 'con2' },
    { id: '3', title: 'test3', content: 'con3' },
    { id: '4', title: 'test4', content: 'con4' },
  ]
  const drapTest = (
    <DragDropContext>
      <Droppable droppableId="test">
        {(provided) => (
          <div
            className="testDropArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {testArr.map(({ id, title, content }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      className="testDragBox"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <SpotsBox />
                    </div>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
  return (
    <div className="testMapWrap">
      <ItinEditorBar />
      {/* <CardListPublic data={cardData[2].data} />
      <TestWrap />
      {searchTest} */}
      {/* {drapTest} */}
      {/* {cardTest} */}
    </div>
  )
}

export default ItinList
