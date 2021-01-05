import React from 'react'
import Card from '../components/main/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
function Home(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="home-body">
        <figure className="home-kv-figure ">
          <img src="./images/kv.jpg" width="100%" />
        </figure>

        <div className="container">
          <div className="row align-items-center home-title">
            <h1 className=" col-2 home-line">行程規劃 </h1>
            <h2 className=" col-2 home-vlr">探索</h2>
          </div>
          <div className="row home-p1">
            <div className="col-5">
              <figure className="home-p1-figure-left">
                <img src="./images/p3.jpg" />
              </figure>
              <figure className="home-p1-figure-left">
                <img src="./images/p2.jpg" />
                <h2>個人化旅歷製作</h2>
                <div className="line" />
              </figure>
            </div>
            <div className="col-7">
              <figure className="home-p1-figure-right-top">
                <img src="./images/p4.png" />
              </figure>

              <div className="row home-p1-figure-right-bottom">
                <figure className="col-4">
                  <img src="./images/p5.png" />
                </figure>
                <figure className="col-4">
                  <img src="./images/p6.jpg" />
                </figure>
                <figure className="col-4">
                  <img src="./images/p7.png" />
                </figure>
              </div>
            </div>
          </div>
          <div className="p1-card ">
            <h2>熱門行程</h2>
          </div>
          <div className="card-background" />
          <div className="Carousel">
            <Carousel responsive={responsive}>
              <div>
                <Card
                  className="home-card"
                  title={'新北耶誕'}
                  text={`刻年在一真升友在，夜長能前路大她力去主保：頭的母打字會，然算子在待的際和體，會作且名說館失古林假母談就這同……只兒兩就適，他數說講中日發形：獎有深升感會重，存的其再因家平家得的過相著有小考外今告臺男無起全朋他非油是間演是世也，仍件實工相回方。花未布你就益統質兒。就家益歌酒得道舉象水。這存總，遊假一笑演動爾他來充麼青道線活作理麼可們省合夫水精所！會著於生了機業我劇我鄉電那你大親河坐這議象不時推們時是然油……夜加前水集都他，因林受用者是起氣照然為車區活運青外車差事土再然軍勢廣太？入生風演叫率究元好克回起不哥地使。功保說經化活座比著，健排的前花相結洲全條灣書？市大死平龍像險愛重，獲石水作實，父大以他吸，樓高法今科推的實變動兒在認製世也子必期同；出她心地已比心外孩輪頭飛……這所報的，舞色初類……歌中軍於全往管義、問濟一，飛等人會入快，不眼園技，少玩之，沒言不期動那下……件投去痛但說義民來……可人緊發心舉雖人亞生他大物商因所長於臺去分土詩成時！`}
                  location={'中壢市'}
                  image={'testImage.jpg'}
                  time1={-1}
                  time2={-1}
                  duration={3}
                  price={-1}
                  person={'王大明'}
                  like={222}
                  mark={222}
                />
              </div>
              <div>
                <Card
                  className="home-card"
                  title={'新北耶誕'}
                  text={`刻年在一真升友在，夜長能前路大她力去主保：頭的母打字會，然算子在待的際和體，會作且名說館失古林假母談就這同……只兒兩就適，他數說講中日發形：獎有深升感會重，存的其再因家平家得的過相著有小考外今告臺男無起全朋他非油是間演是世也，仍件實工相回方。花未布你就益統質兒。就家益歌酒得道舉象水。這存總，遊假一笑演動爾他來充麼青道線活作理麼可們省合夫水精所！會著於生了機業我劇我鄉電那你大親河坐這議象不時推們時是然油……夜加前水集都他，因林受用者是起氣照然為車區活運青外車差事土再然軍勢廣太？入生風演叫率究元好克回起不哥地使。功保說經化活座比著，健排的前花相結洲全條灣書？市大死平龍像險愛重，獲石水作實，父大以他吸，樓高法今科推的實變動兒在認製世也子必期同；出她心地已比心外孩輪頭飛……這所報的，舞色初類……歌中軍於全往管義、問濟一，飛等人會入快，不眼園技，少玩之，沒言不期動那下……件投去痛但說義民來……可人緊發心舉雖人亞生他大物商因所長於臺去分土詩成時！`}
                  location={'中壢市'}
                  image={'testImage.jpg'}
                  time1={-1}
                  time2={-1}
                  duration={3}
                  price={-1}
                  person={'王大明'}
                  like={222}
                  mark={222}
                />
              </div>
              <div>
                <Card
                  className="home-card"
                  title={'新北耶誕'}
                  text={`刻年在一真升友在，夜長能前路大她力去主保：頭的母打字會，然算子在待的際和體，會作且名說館失古林假母談就這同……只兒兩就適，他數說講中日發形：獎有深升感會重，存的其再因家平家得的過相著有小考外今告臺男無起全朋他非油是間演是世也，仍件實工相回方。花未布你就益統質兒。就家益歌酒得道舉象水。這存總，遊假一笑演動爾他來充麼青道線活作理麼可們省合夫水精所！會著於生了機業我劇我鄉電那你大親河坐這議象不時推們時是然油……夜加前水集都他，因林受用者是起氣照然為車區活運青外車差事土再然軍勢廣太？入生風演叫率究元好克回起不哥地使。功保說經化活座比著，健排的前花相結洲全條灣書？市大死平龍像險愛重，獲石水作實，父大以他吸，樓高法今科推的實變動兒在認製世也子必期同；出她心地已比心外孩輪頭飛……這所報的，舞色初類……歌中軍於全往管義、問濟一，飛等人會入快，不眼園技，少玩之，沒言不期動那下……件投去痛但說義民來……可人緊發心舉雖人亞生他大物商因所長於臺去分土詩成時！`}
                  location={'中壢市'}
                  image={'testImage.jpg'}
                  time1={-1}
                  time2={-1}
                  duration={3}
                  price={-1}
                  person={'王大明'}
                  like={222}
                  mark={222}
                />
              </div>
              <div>
                <Card
                  className="home-card"
                  title={'新北耶誕'}
                  text={`刻年在一真升友在，夜長能前路大她力去主保：頭的母打字會，然算子在待的際和體，會作且名說館失古林假母談就這同……只兒兩就適，他數說講中日發形：獎有深升感會重，存的其再因家平家得的過相著有小考外今告臺男無起全朋他非油是間演是世也，仍件實工相回方。花未布你就益統質兒。就家益歌酒得道舉象水。這存總，遊假一笑演動爾他來充麼青道線活作理麼可們省合夫水精所！會著於生了機業我劇我鄉電那你大親河坐這議象不時推們時是然油……夜加前水集都他，因林受用者是起氣照然為車區活運青外車差事土再然軍勢廣太？入生風演叫率究元好克回起不哥地使。功保說經化活座比著，健排的前花相結洲全條灣書？市大死平龍像險愛重，獲石水作實，父大以他吸，樓高法今科推的實變動兒在認製世也子必期同；出她心地已比心外孩輪頭飛……這所報的，舞色初類……歌中軍於全往管義、問濟一，飛等人會入快，不眼園技，少玩之，沒言不期動那下……件投去痛但說義民來……可人緊發心舉雖人亞生他大物商因所長於臺去分土詩成時！`}
                  location={'中壢市'}
                  image={'testImage.jpg'}
                  time1={-1}
                  time2={-1}
                  duration={3}
                  price={-1}
                  person={'王大明'}
                  like={222}
                  mark={222}
                />
              </div>
            </Carousel>
          </div>

          <div className="row justify-content-around">
            <button className="btn">更多</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
