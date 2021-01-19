import React from 'react'
import Card from './Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
function HomeSliderP3(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1202 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 12002, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <Router>
      <>
        <div className="p3Slider-relative">
          <div className="Carousel1">
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
          <Link to="/travelBuddy">
            <div className="p3-all-more">
              <h4>
                更多 <AiOutlineDoubleRight />
              </h4>
            </div>
          </Link>
        </div>
      </>
    </Router>
  )
}

export default HomeSliderP3
