import React from 'react'

function SearchBar(props) {
  //   const [areaList, townList, day] = props
  return (
    <>
      <div className="searchbar-wrapper d-flex justify-content-between">
        <div className="searchbar-form-wrapper d-flex align-items-center">
          <input className="form-custom searchbar-input" type="text" />
          <select className="form-custom searchbar-area" name="searchbar-area">
            <option value="test1">text1</option>
          </select>
          <select
            className="form-custom searchbar-town"
            name="searchbar-town"
          ></select>
          <select
            className="form-custom searchbar-day"
            name="searchbar-day"
          ></select>
        </div>
        <div role="button" className="do-search-button"></div>
      </div>
    </>
  )
}

export default SearchBar
