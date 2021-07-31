import { React, useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";

// dynamic city selector data
import { countries, townships } from "../config/townships";
// transparent picture
import Square from "../img/square.gif";

import "../style/Event.scss";

function Event() {
  const [event, setEvent] = useState([]);

  // for city filter
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);
  const [city, setCity] = useState();

  // for level filter
  const [level, setLevel] = useState();

  async function getEventServer() {
    const url = `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ`;
    let request = await fetch(url);
    let data = await request.json();
    // console.log(event);

    // fill eventArray with filter data
    if (city && level) {
      let eventArray = data.filter(function (i) {
        return i.levelName == level && i.cityName.split(" ")[0] == city;
      });
      setEvent(eventArray);
      return;
    } else if (city) {
      let eventArray = data.filter(function (i) {
        return i.cityName.split(" ")[0] == city;
      });
      setEvent(eventArray);
      return;
    } else if (level) {
      let eventArray = data.filter(function (i) {
        return i.levelName == level;
      });
      setEvent(eventArray);
      return;
    } else {
      setEvent(data);
    }
  }

  // test filter funtion
  const testArray = event.filter(function (i) {
    return i.levelName === "全國級" && i.cityName.split(" ")[0] === "新北市";
  });
  console.log(testArray);

  // check All levelName in event
  const forLevelName = event.map((e) => {
    return e.levelName;
  });
  console.log(forLevelName);

  // check All cityName for only county in event
  const forCityName = event.map((e) => {
    return e.cityName.split(" ")[0];
  });
  console.log(forCityName);

  // get all event data at the beginning
  useEffect(() => {
    getEventServer();
  }, []);

  useEffect(() => {
    console.log(city, level, event);
    getEventServer();
  }, [city, level]);

  // set Card for event
  const displayEvent = event.map((event) => {
    return (
      <div className="col-12 col-sm-6 col-lg-4 mb-4" key={event.actId}>
        <Card>
          <div
            style={{
              backgroundImage:
                "url(" + `https://cloud.culture.tw${event.imageUrl}` + ")",
              backgroundSize: "cover",
            }}
          >
            <img
              src={Square}
              alt="transparent"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>{event.actName}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <>
      <section className="event-filter py-5 mb-5">
        <Container>
          <Row>
            {/* Taiwan Area Selector */}
            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
              <span>地區選單</span>
              <select
                value={country}
                onChange={(e) => {
                  // set string to num
                  setCountry(+e.target.value);
                  // reset township value
                  setTownship(-1);
                  setCity("");
                }}
              >
                <option value="-1">請選擇</option>
                {countries.map((value, index) => (
                  <option key={index} value={index}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            {/* Taiwan City Selector */}
            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
              <span>城市選單</span>
              <select
                value={township}
                onChange={(e) => {
                  // set string to num
                  setTownship(+e.target.value);
                  setCity(townships[country][+e.target.value]);
                }}
              >
                <option value="-1">請選擇</option>
                {country > -1 &&
                  townships[country].map((value, index) => (
                    <option key={index} value={index}>
                      {value}
                    </option>
                  ))}
              </select>
            </div>

            {/* Event Level Selector */}
            <div className="col-12 col-lg-4">
              <span>活動等級</span>
              <select
                onChange={(e) => {
                  setLevel(e.target.value);
                  // check Level Value
                  console.log(e.target.value);
                }}
              >
                <option value="">請選擇</option>
                <option value="全國級">全國級</option>
                <option value="國際級">國際級</option>
              </select>
            </div>
          </Row>
        </Container>
      </section>
      <Container>
        {/* display event card */}
        <Row>{displayEvent}</Row>
      </Container>
    </>
  );
}

export default Event;
