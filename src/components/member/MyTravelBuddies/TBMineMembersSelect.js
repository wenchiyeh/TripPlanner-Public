import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import TBPicUploadRect from './TBPicUploadRect'
import Modal from 'react-bootstrap/Modal'
import $ from 'jquery'

function TBMineMembersSelect() {
  let history = useHistory()
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <div className="add-travelbuddies-outbox">
        <div className="add-travelbuddies-middle">
          <Form validated={validated} onSubmit={handleSubmit}>
            <h1 className="add-travelbuddies-topic">新增旅行揪團</h1>

            <Button
              id="insertTravelBuddies"
              className="add-travelbuddies-cancel"
              onClick={() => history.push('/travelbuddies')}
            >
              {' '}
              取消
            </Button>
            <Button
              id="insertTravelBuddies"
              className="add-travelbuddies-confirm"
              onClick={() => {
                history.push('/travelbuddies')
              }}
            >
              {' '}
              新增
            </Button>
            <br />
          </Form>
        </div>
      </div>
    </>
  )
}

export default TBMineMembersSelect
