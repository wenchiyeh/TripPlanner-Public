import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBMineButtonDelete(props) {
  const [tbMineDelete, settbMineDelete] = useState(false)
  console.log(props.tb_themeName_)
  console.log(props.id)
  // let id = prop.id
  // async function tbDelete(id) {
  //   // 要使用try-catch來作錯誤處理
  //   try {
  //     // 從伺服器得到資料
  //     const response = await fetch('http://localhost:5000/' + id, {
  //       method: 'delete',
  //     })

  //     // ok只能判斷201-299狀態碼的情況
  //     if (response.ok) {
  //       // 剖析資料為JS的數值
  //       const data = await response.json()

  //       // 刷新一次資料列表
  //       getMembers()
  //     }
  //   } catch (error) {
  //     // 發生錯誤的處理情況
  //     alert('無法得到伺服器資料，請稍後再重試')
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <Button
        className="tbmine-button-delete"
        onClick={() => settbMineDelete(true)}
      >
        刪除
      </Button>{' '}
      <Modal
        size="lg"
        show={tbMineDelete}
        onHide={() => settbMineDelete(false)}
        aria-labelledby="tbMineDelete"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="tbMineDelete" className="tbmine-delete-title">
              您確定要刪除<span>{' ' + props.tb_themeName_ + ' '}</span>
              並通知團員嗎？
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="tbMineDeleteMessage">
              <Form.Label htmlFor="tbMineDeleteMessage">通知訊息：</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="tbmine-button-delete-cancel">
              取消
            </Button>
            <Button
              variant=""
              className="tbmine-button-delete-confirm"
              // onClick={tbDelete}
            >
              確定
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBMineButtonDelete
