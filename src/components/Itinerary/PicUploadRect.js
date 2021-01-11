import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function PicUploadRect({
  giveClassName = { input: 'inputClass', img: 'imgClass', wrap: 'wrapClass' },
}) {
  function handlePicChange(e, index) {
    let reader = new FileReader()
    let file = e.target.files[0]
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        document.querySelector(`.${index}`).setAttribute('src', reader.result)
      }
    }
  }
  const [isDisplay, setIsDisplay] = useState(false)
  const displayNone = (
    <div className="itin-readyToUpload d-flex justify-content-center align-items-center">
      <Button
        variant="light"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector(`.${giveClassName.input}`).click()
          console.log(giveClassName.input)
        }}
      >
        選擇照片
      </Button>
    </div>
  )
  const displayImg = (
    <img
      onClick={(e) => {
        e.preventDefault()
        document.querySelector(`.${giveClassName.input}`).click()
        console.log(giveClassName.input)
      }}
      className={giveClassName.img}
      alt={`PicInfo`}
    />
  )
  return (
    <div className={giveClassName.wrap}>
      <input
        className={`itin-pic-input ${giveClassName.input}`}
        type="file"
        accept="image/*"
        onChange={(e) => {
          setIsDisplay(true)
          handlePicChange(e, giveClassName.img)
        }}
      />
      {isDisplay ? displayImg : displayNone}
    </div>
  )
}

export default PicUploadRect
