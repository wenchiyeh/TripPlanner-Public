import React, { useState, useEffect, useRef } from 'react'
import { debounce } from 'lodash'
//利用debounce來避免敏感的onchange
//
//使用方式：
//以參數方式傳入要讓人選的areaList townList day 這三個陣列
//在父層 const [searchFilter,setSearchFilter] =useState({}) 並將set函式以參數傳入
//按下送出按鈕後，searchFilter會收到returnObject，自行解析後即可用useEffect監聽searchFilter使用

function SearchBar({
  areaList = ['test1', 'test2', 'test3'],
  townList = ['test1', 'test2', 'test3'],
  day = ['test1', 'test2', 'test3'],
  setSearchFilter = () => {},
}) {
  let inputRef = useRef(null) // 建立輸入框參考點
  const [returnObject, setReturnObject] = useState({
    searchString: areaList[0],
    area: townList[0],
    town: day[0],
    day: '',
  })
  const [inputText, setInputText] = useState('')
  const [selectArea, setSelectArea] = useState(areaList[0])
  const [selectTown, setSelectTown] = useState(townList[0])
  const [selectDay, setSelectDay] = useState(day[0])
  useEffect(() => {
    let currentValue = {
      searchString: inputText,
      area: selectArea,
      town: selectTown,
      day: selectDay,
    }
    setReturnObject(currentValue)
  }, [inputText, selectArea, selectTown, selectDay])
  const handleInput = () => {
    setInputText(inputRef.current.value)
  }
  function handleChange(e, type) {
    let valueChange = e.target.value
    switch (type) {
      case 'area':
        setSelectArea(valueChange)
        break
      case 'town':
        setSelectTown(valueChange)
        break
      case 'day':
        setSelectDay(valueChange)
        break
      default:
        break
    }
  }
  return (
    <>
      <div className="searchbar-wrapper d-flex justify-content-between">
        <div className="searchbar-form-wrapper d-flex align-items-center">
          <input
            ref={inputRef}
            onChange={debounce(handleInput, 500)}
            className="form-custom searchbar-input"
            type="text"
          />
          <select
            onChange={(e) => {
              handleChange(e, 'area')
            }}
            className="form-custom searchbar-area"
            name="searchbar-area"
          >
            {areaList.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              handleChange(e, 'town')
            }}
            className="form-custom searchbar-town"
            name="searchbar-town"
          >
            {townList.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              handleChange(e, 'day')
            }}
            className="form-custom searchbar-day"
            name="searchbar-day"
          >
            {day.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
        <div
          role="button"
          onClick={() => {
            setSearchFilter(returnObject)
          }}
          className="do-search-button"
        ></div>
      </div>
    </>
  )
}

export default SearchBar
