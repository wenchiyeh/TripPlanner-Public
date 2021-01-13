import React from 'react'
//測試用假資料
import fakeTestingData from './testBoxData'
import PicUploadRect from './PicUploadRect'
//
function ItinEditorDetail({
  isEdit = true,
  boxData = fakeTestingData,
  setData = () => {},
}) {
  // function handlePicUpload() {
  //   fetch('http://localhost:5000/upload', {
  //     method: 'post',
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       test: 1,
  //     }),
  //   })
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((jsonData) => {
  //       console.log(jsonData)
  //     })
  //     .catch((err) => {
  //       console.log(`err = ${err}`)
  //     })
  // }
  const displayEdit = (
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
          <div key={indexDay}>
            {element.data.map((ele, indexBox) => (
              <div
                className={`itin-detail-pictext-wrapper boxInfo${indexDay}${indexBox}`}
                key={indexBox}
              >
                <p>{ele.title}</p>
                <div className="itin-detail-checkKV">
                  <input
                    type="radio"
                    name="itin-kv"
                    value={`${indexDay}${indexBox}`}
                  />
                  設為主視覺
                </div>
                <PicUploadRect
                  giveClassName={{
                    input: `itin-input-${indexDay}${indexBox}`,
                    img: `PicInfo${indexDay}${indexBox}`,
                    wrap: 'detailPic',
                  }}
                />
                <textarea placeholder="您可以在此輸入心得或描述" />
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  )
  const displayConst = (
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
          <div key={indexDay}>
            {element.data.map((ele, indexBox) => (
              <div
                className={`itin-detail-pictext-wrapper boxInfo${indexDay}${indexBox}`}
                key={indexBox}
              >
                <p>{ele.title}</p>
                {ele.image === '' || ele.image === null ? (
                  <></>
                ) : (
                  <div className="detailPic">
                    <img src={`/images/${ele.image}`} alt={ele.title} />
                  </div>
                )}
                <div className="showInfoText">
                  <p>{ele.info}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  )
  return isEdit ? displayEdit : displayConst
}

export default ItinEditorDetail
