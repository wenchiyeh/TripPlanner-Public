import React, { useState, useEffect, useRef } from 'react'
import { debounce } from 'lodash'
//利用debounce來避免敏感的onchange
//

function SearchBar({
  areaList = ['全部', '北部', '中部', '南部', '東部', '離島'],
  townList = [
    ['全部'],
    ['全部', '台北市', '新北市', '基隆市', '桃園市'],
    ['全部', '新竹市', '新竹縣', '台中市', '苗栗縣', '彰化縣', '南投縣'],
    ['全部', '高雄市', '台南市', '嘉義市', '嘉義縣', '屏東縣', '雲林縣'],
    ['全部', '宜蘭縣', '花蓮縣', '台東縣'],
    ['全部', '澎湖', '金門'],
  ],
  day = ['不限', '1天', '2天', '多天'],
  setSearchFilter = () => {},
}) {
  let inputRef = useRef(null) // 建立輸入框參考點
  //建立回傳用物件
  const [returnObject, setReturnObject] = useState({
    area: areaList[0],
    town: townList[0][0],
    day: day[0],
    searchString: '',
  })
  //
  const [inputText, setInputText] = useState('')
  const [selectArea, setSelectArea] = useState(areaList[0])
  const [selectTown, setSelectTown] = useState(townList[0][0])
  const [selectDay, setSelectDay] = useState(day[0])
  const [nowArea, setNowArea] = useState(0)
  //偵測地區變化
  useEffect(() => {
    let currentValue = {
      searchString: inputText,
      area: selectArea,
      town: selectTown,
      day: selectDay,
    }
    setReturnObject(currentValue)
    setNowArea(areaList.indexOf(selectArea))
  }, [selectArea]) // eslint-disable-line react-hooks/exhaustive-deps
  //偵測其他選擇與輸入框變化
  useEffect(() => {
    let currentValue = {
      searchString: inputText,
      area: selectArea,
      town: selectTown,
      day: selectDay,
    }
    setReturnObject(currentValue)
  }, [inputText, selectTown, selectDay]) // eslint-disable-line react-hooks/exhaustive-deps
  //記錄輸入框字串
  const handleInput = () => {
    setInputText(inputRef.current.value)
  }
  //處理選項變化
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
  //
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
            {townList[nowArea].map((element, index) => (
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
// 檔案負責人: 柯政安
