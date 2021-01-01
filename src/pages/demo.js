import React from 'react'
import Card from '../components/main/Card'

//元件demo放這用的
function Demo() {
  return (
    <>
      <Card
        title="kskkss"
        text="sss"
        location="sss" //左上角的地標
        image="..." //圖片的檔名與附檔名ex: 'testImage.jpg'
        time1="-1" //第一個日期
        time2="-1" //第二個日期
        duration="-1" //天數
        price="-1" //價格
        person="1" //卡片內顯示的人名
        like="2" //愛心人數
        mark="3"
      />
    </>
  )
}

export default Demo
