import React from 'react'
//測試用假資料
import fakeTestingData from './testBoxData'
//
function ItinEditorDetail({
  index = [0, 1],
  boxData = fakeTestingData,
  setData = () => {},
}) {
  function handlePicChange(e, index) {
    let reader = new FileReader()
    let file = e.target.files[0]
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        document
          .querySelector(`.PicInfo${index}`)
          .setAttribute('src', reader.result)
      }
    }
  }
  function handlePicUpload() {
    fetch('http://localhost:5000/upload', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        test: 1,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
      })
      .catch((err) => {
        console.log(`err = ${err}`)
      })
  }
  const temp = (
    <div>
      <img
        onClick={(e) => {
          document.querySelector(`.itin-input-${index[0]}${index[1]}`).click()
        }}
        className="picUpload"
        src=""
        alt="pic"
      />
      <input
        className={`itin-pic-input itin-input-${index[0]}${index[1]} `}
        type="file"
        accept="image/*"
        onChange={(e) => {
          handlePicChange(e)
        }}
      />
      <div>
        <button onClick={handlePicUpload}>上傳</button>
      </div>
    </div>
  )
  return (
    <div className="itin-detail-wrapper">
      <div className="itin-map-header"></div>
      <div className="itin-detail-map-wrapper"></div>
      <hr />
      {boxData.map((element, index) => (
        <h4 className={`dayTitle${index}`} key={index}>
          {element.title}
        </h4>
      ))}
      <form id="detailForm">
        {boxData.map((element, indexDay) => (
          <>
            {element.data.map((ele, indexBox) => (
              <div
                className={`itin-detail-pictext-wrapper boxInfo${indexDay}${indexBox}`}
              >
                <div className="detailPic">
                  <input
                    className={`itin-pic-input itin-input-${indexDay}${indexBox} `}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      handlePicChange(e, `${indexDay}${indexBox}`)
                    }}
                  />
                  <img
                    className={`PicInfo${indexDay}${indexBox}`}
                    src=""
                    alt={`PicInfo${indexDay}${indexBox}`}
                  />
                </div>
                <textarea placeholder="您可以在此輸入心得或描述(非必要)" />
              </div>
            ))}
          </>
        ))}
      </form>
    </div>
  )
}

export default ItinEditorDetail
