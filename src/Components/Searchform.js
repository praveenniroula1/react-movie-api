import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Searchform = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;

    setStr(value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(str);
    handleOnSubmit(str);
    // e.target.reset();
    setStr("");
  };

  return (
    <div className="mt-5 ">
      <h1 className="text-center">My movie List</h1>
      <Form onSubmit={formSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="Search Movie Name..."
              value={str}
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
