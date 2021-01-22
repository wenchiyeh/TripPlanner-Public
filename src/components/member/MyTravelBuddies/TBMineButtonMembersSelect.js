import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBMineButtonMembersSelect(props) {
  const [tbMineMembersSelect, settbMineMembersSelect] = useState(false)
  const [tbSelect, settbSelect] = useState([])
  let tb_id = props.id
  async function getTBSelect(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/travelbuddies/membersselect/${tb_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        settbSelect(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getTBSelect()
  }, [])

  return (
    tbSelect.length > 0 && (
      <>
        <Button
          className="tbmine-button-membersselect"
          onClick={() => settbMineMembersSelect(true)}
        >
          團員確認
        </Button>{' '}
        <Modal
          size="lg"
          show={tbMineMembersSelect}
          onHide={() => settbMineMembersSelect(false)}
          aria-labelledby="tbMineMembersSelect"
        >
          <Form>
            <Modal.Header closeButton>
              <Modal.Title
                id="tbMineMembersSelect"
                className="tbmine-delete-title"
              >
                請選擇團員並由系統發送通知：
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="tbMembersSelect">
                {tbSelect.map((v, i) => (
                  <div className="d-flex">
                    <Form.Check name="select[]" value={v.memberId} />
                    <img
                      src={'/images/member/' + v.memberPhoto}
                      className="card-img img-fluid tbMembersSelectPhoto"
                      alt={v.memberPhoto}
                    />
                    <div>{v.memberName}</div>
                  </div>
                ))}
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
  )
}

export default TBMineButtonMembersSelect

// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'

// function TBMineButtonMembersSelect() {
//   return (
//     <>
//       <Button className="tbmine-button-membersselect">團員確認</Button>
//     </>
//   )
// }

// export default TBMineButtonMembersSelect
