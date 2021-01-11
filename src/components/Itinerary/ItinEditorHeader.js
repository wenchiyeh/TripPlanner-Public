import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function ItinEditorHeader({
  isEdit = false,
  isPublish = false,
  isMe = false,
  title = '行程表',
}) {
  let history = useHistory()
  const displayPublish = (
    <div className="itin-editor-title publish-title d-flex justify-content-between">
      <div>
        {isMe && <h2>我的行程表</h2>}
        <h1>{title}</h1>
      </div>
      {isEdit && (
        <div className="d-flex align-items-center">
          <Button variant="info" onClick={() => {}}>
            發表
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              history.goBack()
            }}
          >
            取消
          </Button>
        </div>
      )}
      {isMe && !isEdit && (
        <div className="d-flex align-items-center">
          <Button variant="info" onClick={() => {}}>
            修改
          </Button>
        </div>
      )}
    </div>
  )
  const displayPrivate = (
    <div className="itin-editor-title">
      <p>行程表製作</p>
      {isEdit ? (
        <input
          className="form-custom"
          type="text"
          placeholder="請輸入行程標題"
        />
      ) : (
        <h2>{title}</h2>
      )}
    </div>
  )
  return <>{isPublish ? displayPublish : displayPrivate}</>
}

export default ItinEditorHeader
