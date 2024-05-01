import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setName } from "../../redux/cityNameSlice";

import "./style.css";

function FormField() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setName(cityName));
    localStorage.setItem("cityName", JSON.stringify(cityName));
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: "100%" }}
      className="d-flex justify-content-evenly"
    >
      <Form.Group style={{ width: "95%" }}>
        <Form.Floating style={{ width: "100%" }}>
          <Form.Control
            id="cityName"
            type="text"
            placeholder="Enter city name here"
            required
            onChange={handleOnChange}
          />
          <Form.Label>Search here</Form.Label>
        </Form.Floating>
      </Form.Group>
      <Button
        onClick={handleSubmit}
        variant="secondary"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Search />
      </Button>
    </Form>
  );
}

export default FormField;
