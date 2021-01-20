import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBButtonSignedUp(props) {
  const [tbButtonSignedUp, settbButtonSignedUp] = useState(false)
  const [signedUp, setSignedUp] = useState(0)
  let id = props.id
  console.log(id)
  async function membersSignedUp() {
    const newSignedUp = {
      id,
    }
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch(
        'http://localhost:5000/travelbuddies/tbsignedup',
        {
          method: 'post',
          body: JSON.stringify(newSignedUp),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)

        // 設定資料到member狀態
        if (data.id) console.log('報名成功')
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  async function membersDropOut() {
    const newDropOut = {
      id,
    }
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch(
        'http://localhost:5000/travelbuddies/tbdropout',
        {
          method: 'delete',
          body: JSON.stringify(newDropOut),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)

        // 設定資料到member狀態
        if (data.id) console.log('報名成功')
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  return (
    <>
      {signedUp === 0 ? (
        <Button
          className=""
          onClick={() => {
            membersSignedUp()
            settbButtonSignedUp(true)
            setSignedUp(1)
          }}
        >
          報名
        </Button>
      ) : (
        <Button
          className=""
          onClick={() => {
            membersDropOut()
            settbButtonSignedUp(true)
            setSignedUp(0)
          }}
        >
          取消報名
        </Button>
      )}
      <Modal
        size="lg"
        show={tbButtonSignedUp}
        onHide={() => settbButtonSignedUp(false)}
        aria-labelledby="tbSignedUp"
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title id="tbSignedUp" className="tbjoined-dropout-title">
              {'您已成功報名' + ' ' + props.themeName + ' ' + '！'}
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
      <Modal
        size="lg"
        show={tbButtonSignedUp}
        onHide={() => settbButtonSignedUp(false)}
        aria-labelledby="tbDropOut"
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title id="tbDropOut" className="tbjoined-dropout-title">
              {'您已取消報名' + ' ' + props.themeName + ' ' + '！'}
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </>
  )
}

export default TBButtonSignedUp
