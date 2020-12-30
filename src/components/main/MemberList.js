import React from 'react'

function MemberList() {
  const Person = ({ img, name, job }) => {
    const url = `http://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
      <div class="person">
        <img src={url} />
        <h3>Name : {name}</h3>
        <p>Job : {job}</p>
      </div>
    )
  }

  const memberlist = [
    { id: '1', name: 'John', job: 'Teacher' },
    { id: '2', name: 'Jacob', job: 'Doctor' },
    { id: '3', name: 'Darren', job: 'Artist' },
    { id: '4', name: 'Noble', job: 'Student' },
  ]
  return (
    <div>
      {memberlist.map((data) => (
        <Person img={data.id} name={data.name} job={data.job} />
      ))}
    </div>
  )
}
export default MemberList
