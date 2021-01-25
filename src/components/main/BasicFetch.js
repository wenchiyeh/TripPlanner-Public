async function BasicFetch({ url, paramas = '', method = 'get', data = {} }) {
  let reqBody = method
  if (method === 'post') {
    reqBody = {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  }
  try {
    const response = await fetch(
      `http://localhost:5000/${url}/${paramas}`,
      reqBody
    )
    if (response.ok) {
      let data = await response.json()
      if (data.length > 0) {
        return true
      } else {
        return false
      }
    }
  } catch (err) {
    alert('無法得到伺服器資料，請稍後再重試')
    console.log(err)
  }
}

export default BasicFetch
