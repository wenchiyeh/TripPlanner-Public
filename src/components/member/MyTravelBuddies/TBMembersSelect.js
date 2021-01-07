import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function TBMembersSelect() {
  return (
    <>
      <div>
        <Form>
          <div className="tbmembersselect-title">
            選擇團員並由系統發送通知：
          </div>
          <Form.Group controlId="tbMembersSelect">
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3 d-flex">
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="陳嘉賢"
                    type={type}
                    id={`inline-${type}-membersselect`}
                    name="membersselect[]"
                    value="1"
                  />
                  <img
                    src="http://localhost:3000/images/member/DSC_7437-37.jpg"
                    className="card-img img-fluid tbMembersSelectPhoto"
                  ></img>
                </div>
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="王華旺"
                    type={type}
                    id={`inline-${type}-membersselect`}
                    name="membersselect[]"
                    value="1"
                  />
                  <img
                    src="http://localhost:3000/images/member/DSC_7437-37.jpg"
                    className="card-img img-fluid tbMembersSelectPhoto"
                  ></img>
                </div>
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="王小明"
                    type={type}
                    id={`inline-${type}-membersselect`}
                    name="membersselect[]"
                    value="1"
                  />
                  <img
                    src="http://localhost:3000/images/member/DSC_7437-37.jpg"
                    className="card-img img-fluid tbMembersSelectPhoto"
                  ></img>
                </div>
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="陳小美"
                    type={type}
                    id={`inline-${type}-membersselect`}
                    name="membersselect[]"
                    value="1"
                  />
                  <img
                    src="http://localhost:3000/images/member/DSC_7437-37.jpg"
                    className="card-img img-fluid tbMembersSelectPhoto"
                  ></img>
                </div>
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="廖育聖"
                    type={type}
                    id={`inline-${type}-membersselect`}
                    name="membersselect[]"
                    value="1"
                  />
                  <img
                    src="http://localhost:3000/images/member/DSC_7437-37.jpg"
                    className="card-img img-fluid tbMembersSelectPhoto"
                  ></img>
                </div>
              </div>
            ))}
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default TBMembersSelect
