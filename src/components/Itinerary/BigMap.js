import React, { useState, useRef, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import GoogleMapReact from 'google-map-react'
import { debounce } from 'lodash'
//利用debounce來避免敏感的onchange
//引入 API key
import { Key } from '../../Key'
//
//
const AnyReactComponent = ({ text }) => <div>{text}</div>
const PlaceMarker = ({ title, vicinity }) => (
  <div className="map-markerWrap d-flex flex-column align-items-center">
    <div className="map-marker-info d-flex  flex-column align-items-center">
      <h4>{title}</h4>
      <p>{vicinity}</p>
      <h5>
        加進行程 <FaPlus />
      </h5>
    </div>
    <img
      className="map-markerIcon"
      src={'/images/paperPlane.png'}
      alt={title}
    />
    <h4>{title}</h4>
  </div>
)
// if business_status 確認是否是景點     .name 地名
//
function BigMap(props) {
  //預設傳入值
  const {
    center = { lat: 24.969328305278708, lng: 121.1954124510366 }, //中央大學
    zoom = 18, //越大放越大
  } = props
  //
  // 預設位置
  const [myPosition, setMyPosition] = useState({
    lat: 24.965173627005004, //中央路全家
    lng: 121.19192039564527,
  })
  //
  //地圖樣式
  const mapOptions = { styles: null }
  //
  //建立鉤子
  const [mapApiLoaded, setMapApiLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState(null)
  const [mapApi, setMapApi] = useState(null)
  let inputRef = useRef(null) // 建立輸入框參考點
  const [inputText, setInputText] = useState('')
  const [autocompleteResults, setAutocompleteResults] = useState([])
  const [currentCenter, setCurrentCenter] = useState(center)
  const [places, setPlaces] = useState([]) //儲存搜尋到的地點
  //
  // 當地圖載入完成，將地圖實體與地圖 API 傳入 state 供之後使用
  const apiHasLoaded = (map, maps) => {
    setMapInstance(map) //map = 地圖實體
    setMapApi(maps) //maps = 各種map API
    setMapApiLoaded(true)
  }
  const handleCenterChange = () => {
    if (mapApiLoaded) {
      const newPosition = {
        lat: mapInstance.center.lat(),
        lng: mapInstance.center.lng(),
      }
      setCurrentCenter(newPosition) // 改變地圖視角位置
      setMyPosition(newPosition) // 改變 MyPosition
      doSearchPlace() //改變中心後重新搜尋地標
    }
  }
  const doSearchPlace = () => {
    var loc = new mapApi.LatLng(
      mapInstance.center.lat(),
      mapInstance.center.lng()
    )
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance)
      const request = {
        location: loc,
        radius: '300',
      }
      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          console.log(results)
          setPlaces(results)
        }
      })
    }
  }
  // 自動完成
  const handleAutocomplete = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.AutocompleteService()
      const request = {
        input: inputText,
      }
      service.getPlacePredictions(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setAutocompleteResults(results) //寫入 state 供使用
        }
      })
    }
  }
  //
  //取得輸入框值
  const handleInput = () => {
    setInputText(inputRef.current.value)
  }
  useEffect(() => {
    handleAutocomplete()
  }, [inputText]) // eslint-disable-line react-hooks/exhaustive-deps
  //
  // 點擊自動完成地址時，更改 MyPosition
  const handleClickToChangeMyPosition = (e) => {
    const placeId = e.target.getAttribute('dataid')
    const service = new mapApi.places.PlacesService(mapInstance)
    const request = {
      placeId,
      fields: ['geometry'],
    }

    service.getDetails(request, (results, status) => {
      if (status === mapApi.places.PlacesServiceStatus.OK) {
        const newPosition = {
          lat: results.geometry.location.lat(),
          lng: results.geometry.location.lng(),
        }
        setCurrentCenter(newPosition) // 改變地圖視角位置
        setMyPosition(newPosition) // 改變 MyPosition
        setAutocompleteResults([]) // 清空自動搜尋地址清單
        inputRef.current.value = '' // 清空 <input>
      }
    })
  }
  return (
    <div className="map-comp-wrapper">
      <div className="map-search-wrapper">
        <input
          className="form-custom"
          ref={inputRef}
          type="text"
          placeholder="搜尋景點"
          onChange={debounce(handleInput, 500)}
        />
        <div onClick={handleClickToChangeMyPosition}>
          {autocompleteResults && inputText
            ? autocompleteResults.map((item, index) => (
                <div className="d-flex">
                  <div
                    className="map-search-result"
                    key={index}
                    dataid={item.place_id}
                  >
                    　{item.structured_formatting.main_text}
                  </div>
                  <div className="map-search-plus">
                    <FaPlus />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: Key,
          libraries: ['places'], // 要在這邊放入要使用的 API
        }}
        center={currentCenter}
        onBoundsChange={handleCenterChange} //移動地圖邊界時觸發 handleCenterChange
        defaultCenter={center}
        defaultZoom={zoom}
        // options={mapOptions}
        yesIWantToUseGoogleMapApiInternals // 設定為 true
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)} // 載入完成後執行
        // onClick={({ lng, lat }) => {
        //   console.log(lng, lat)
        //   doSearchPlace()
        // }}
      >
        {places.map((item) => (
          <PlaceMarker
            key={item.id}
            lat={item.geometry.location.lat()}
            lng={item.geometry.location.lng()}
            title={item.name}
            placeId={item.place_id}
            vicinity={item.vicinity}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default BigMap
// 檔案負責人: 柯政安
