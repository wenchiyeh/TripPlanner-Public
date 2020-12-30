import React from 'react'

function MemberList() {
  const Person = ({ img, name }) => {
    const url = `http://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
      <div class="person">
        <h3>一般會員</h3>
        <img src={url} />
        <h4> {name}</h4>
        <button>修改資料</button>
      </div>
    )
  }

  const memberlist = [{ id: '1', name: 'John' }]
  return (
    <div>
      {memberlist.map((data) => (
        <Person img={data.id} name={data.name} />
      ))}
    </div>
  )
}
export default MemberList
