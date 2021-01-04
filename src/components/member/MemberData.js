import React from 'react'

function MemberData(props) {
  return (
    <>
      <h1>會員輸入表單</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: '300px' }}
          />
          {/* <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            style={{ width: '300px' }}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default MemberData
