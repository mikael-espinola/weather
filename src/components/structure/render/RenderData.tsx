import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { apiData } from "../../redux/setDataslice";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Compass,
  DropletFill,
  SunriseFill,
  SunsetFill,
  ThermometerHigh,
  Wind,
} from "react-bootstrap-icons";

function RenderData() {
  const data = useSelector(apiData);
  const [unity, setUnity] = useState(true);

  const setFormattedHour = (date: number) => {
    const newDate = new Date(date * 1000);
    const hour = newDate.getHours().toString().padStart(2, "0");
    const minutes = newDate.getMinutes().toString().padStart(2, "0");
    const seconds = newDate.getSeconds().toString().padStart(2, "0");
    const formatted = `${hour}:${minutes}:${seconds}`;
    return formatted;
  };

  const handleWeatherPic = (weather: string) => {
    switch (weather) {
      case "Clear":
        return "limpo.png";
      case "Rain":
        return "chuva.png";
      case "Snow":
        return "nevoeiro.png";
      case "Clouds":
        return "nublado.png";
      case "Haze":
        return "tempestade.png";
    }
  };

  const handleUnity = () => {
    setUnity(!unity);
  };

  const toFahrenheit = (celciusValue: number) => {
    console.log(celciusValue);
    let fahrenheit = 0;
    fahrenheit = celciusValue * (9 / 5) + 32;
    return fahrenheit;
  };

  const toMPH = (kmValue: number) => {
    const mph: number = kmValue * 0.621371;
    return mph;
  };

  return (
    <>
      {data.cod !== "0" && (
        <>
          {data.cod === "404" ? (
            <Card>
              <Container>
                <h3 style={{ margin: "1em" }}>Not found...</h3>
                <Card.Img
                  style={{ width: "200px", height: "200px" }}
                  src={require(`../../assets/images/404.png`)}
                />
              </Container>
            </Card>
          ) : (
            <Container className="">
              {data.weather.map((item, index) => (
                <>
                  <Card.Img
                    style={{ width: "150px", height: "150px" }}
                    src={require(`../../assets/images/${handleWeatherPic(
                      item.main
                    )}`)}
                  />
                  <Card.Body>
                    <Card.Text key={index} className="fs-3">
                      {data.name}, {data.sys.country}
                    </Card.Text>
                    <Card.Text key={index} className="text-capitalize m-1 ">
                      {item.description}
                    </Card.Text>
                    <Row>
                      <Col>
                        <Card.Text key={index} className="fs-3">
                          {unity
                            ? `${data.main.temp.toFixed(1)} ºC`
                            : `${toFahrenheit(data.main.temp).toFixed(
                                1
                              )} ºF`}{" "}
                          <Button
                            onClick={handleUnity}
                            style={{ padding: "5px" }}
                            variant="outline-secondary"
                          >
                            {unity ? "ºC" : "ºF"}
                          </Button>
                        </Card.Text>
                        <Card.Text key={index} style={{ fontSize: "16px" }}>
                          <ArrowUpCircle style={{ margin: "0 0.5em" }} />
                          {unity
                            ? `${data.main.temp_max.toFixed(1)} ºC`
                            : `${toFahrenheit(data.main.temp_max).toFixed(
                                1
                              )} ºF`}{" "}
                          /{" "}
                          {unity
                            ? `${data.main.temp_min.toFixed(1)} ºC`
                            : `${toFahrenheit(data.main.temp_min).toFixed(
                                1
                              )} ºF`}
                          <ArrowDownCircle style={{ margin: "0 0.5em" }} />
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </>
              ))}
              <Row>
                <Col>
                  <ListGroup style={{ fontSize: "11px" }}>
                    <ListGroup.Item style={{ padding: "0.2em" }}>
                      <Card.Text>
                        <ThermometerHigh />
                        Feels like:{" "}
                        {unity
                          ? `${data.main.feels_like.toFixed(1)} ºC`
                          : `${toFahrenheit(data.main.feels_like).toFixed(
                              1
                            )} ºF`}
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ padding: "0.2em" }}>
                      <Card.Text>
                        <DropletFill /> Humidity: {data.main.humidity}%
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ padding: "0.2em" }}>
                      <Card.Text>
                        <Compass /> Direction: {data.wind.deg} º
                      </Card.Text>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup style={{ fontSize: "11px" }}>
                    <ListGroup.Item style={{ padding: "0.2em" }}>
                      <Card.Text>
                        <SunriseFill /> Sunrise:{" "}
                        {setFormattedHour(data.sys.sunrise)}
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ padding: "0.2em" }}>
                      <Card.Text>
                        <SunsetFill /> Sunset:{" "}
                        {setFormattedHour(data.sys.sunset)}
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ padding: "0.2em" }}>
                      <Card.Text>
                        <Wind /> Speed:{" "}
                        {unity
                          ? `${data.wind.speed.toFixed(0)} km/h`
                          : `${toMPH(data.wind.speed).toFixed(0)} mph`}
                      </Card.Text>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          )}
        </>
      )}
    </>
  );
}

export default RenderData;
