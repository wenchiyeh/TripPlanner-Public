import React from 'react'

function HomeSearchBar(props) {
  //   const [areaList, townList, day] = props
  return (
    <>
      <div className="homesearchbar-wrapper d-flex justify-content-between">
        <div className="homesearchbar-form-wrapper d-flex align-items-center">
          <select
            className="form-custom homesearchbar-area"
            name="homesearchbar-area"
          >
            <option value="test1">行程</option>
            <option value="test1">揪團</option>
            <option value="test1">講座</option>
          </select>
          <select
            className="form-custom homesearchbar-town"
            name="homesearchbar-town"
          >
            <option value="test1">基隆市</option>
            <option value="test1">台北市</option>
            <option value="test1">新北市</option>
            <option value="test1">桃園市</option>
            <option value="test1">新竹縣</option>
            <option value="test1">苗栗縣</option>
            <option value="test1">台中市</option>
            <option value="test1">南投縣</option>
            <option value="test1">彰化縣</option>
            <option value="test1">雲林縣</option>
            <option value="test1">嘉義縣</option>
            <option value="test1">台南市</option>
            <option value="test1">高雄市</option>
            <option value="test1">屏東縣</option>
            <option value="test1">台東縣</option>
            <option value="test1">宜蘭縣</option>
            <option value="test1">花蓮縣</option>

            <option value="test1"></option>
          </select>
          {/* <select className="form-custom searchbar-day" name="searchbar-day"> */}
          <input
            className="form-custom homesearchbar-day"
            type="date"
            id="start"
            name="searchbar-day"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
          {/* </select> */}
          <input className="form-custom homesearchbar-input" type="text" />
        </div>
        <div role="button" className="homedo-search-button"></div>
      </div>
    </>
  )
}

export default HomeSearchBar
