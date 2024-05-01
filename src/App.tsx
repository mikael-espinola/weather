import React from "react";
import "./App.css";
import { Card, CardHeader, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormField from "./components/structure/form/FormField";
import RenderData from "./components/structure/render/RenderData";
import useWeatherApi from "./components/structure/Hooks/WeatherApi";

function App() {
  useWeatherApi();

  return (
    <div className="App">
      <Container>
        <Card>
          <CardHeader>
            <Card.Title className="fs-3">Weather</Card.Title>
          </CardHeader>
          <Card.Body>
            <FormField />
            <RenderData />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
