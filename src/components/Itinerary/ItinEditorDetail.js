import React from 'react'

function ItinEditorDetail({ index = [0, 1] }) {
  function handlePicChange(e) {
    let reader = new FileReader()
    let file = e.target.files[0]
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        document.querySelector('.picUpload').setAttribute('src', reader.result)
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
  return (
    <>
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
    </>
  )
}

export default ItinEditorDetail
