import React from 'react'
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
function MemberList() {
  let history = useHistory()
  const Person = ({ img, name }) => {
    const url = `http://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
      <div class="person">
        <h3>一般會員</h3>
        <img src={url} />
        <h4> {name}</h4>
        <button
          onClick={() => {
            history.push('/myAccount')
          }}
        >
          修改資料
        </button>
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

// 這是左邊會員卡 Ray
// 照片跟名字要再改
// img檔 放在跟目錄的public/images裡 使用絕對路徑 http://localhost:3000/images/檔名
