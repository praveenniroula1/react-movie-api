import React, { useEffect, useState } from "react";
import { ButtonGroup, Col, Row, Button } from "react-bootstrap";
import { Customcard } from "./Customcard";
import { Customlist } from "./Customlist";

export const Movielist = ({ movielist, deletMovie }) => {
  const [displayList, setDisplayList] = useState([]);
  const [view, setView] = useState("grid");
  useEffect(() => {
    setDisplayList(movielist);
  }, [movielist]);

  const filtermovie = (mood) => {
    if (mood === "all") {
      return setDisplayList(movielist);
    }
    const tempArg = movielist.filter((item) => item.mood === mood);
    setDisplayList(tempArg);
  };
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup arial-label="Basic example ">
            <Button variant="success" onClick={() => filtermovie("all")}>
              All
            </Button>{" "}
            <Button variant="primary" onClick={() => filtermovie("happy")}>
              Happy
            </Button>{" "}
            <Button variant="warning" onClick={() => filtermovie("romantic")}>
              Romantic
            </Button>{" "}
          </ButtonGroup>

          <ButtonGroup arial-label="Basic example">
            <Button onClick={() => setView("grid")} variant="primary">
              Grid
            </Button>{" "}
            <Button onClick={() => setView("list")} variant="secondary">
              List
            </Button>{" "}
          </ButtonGroup>
        </Col>
      </Row>
      <Button
        style={{
          boxShadow: "5px 5px 5px black",
        }}
        className="bg-secondary mt-2"
      >
        {displayList.length} Movies Found!!!
      </Button>
      <br />

      <Row className=" mt-5">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, i) =>
            view === "grid" ? (
              <Customcard key={i} Movie={item} func={deletMovie} />
            ) : (
              <Customlist key={i} Movie={item} func={deletMovie} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
