import React from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Movielist } from "./Movielist";

export const Customlist = ({ Movie = {}, func, insearchForm }) => {
  const { Title, Poster, imdbRating, Plot } = Movie;
  return (
    <div style={{ width: "100%" }}>
      <Card
        style={{ width: "100%" }}
        className="mt-5 d-flex flex-row justify-content-between"
      >
        <div style={{ width: "200px" }}>
          <Card.Img variant="top" src={Poster} style={{ width: "200px" }} />
        </div>
        <Card.Body className="list">
          <Card.Title>{Title}</Card.Title>
          <Card.Title>Rating:{imdbRating}</Card.Title>
          <div>{Plot}</div>
          {insearchForm ? (
            <div className="d-flex justify-content-between mt-3">
              <Button
                variant="primary"
                onClick={() => func({ ...Movie, mood: "happy" })}
              >
                Happy
              </Button>

              <Button
                variant="warning"
                onClick={() => func({ ...Movie, mood: "romantic" })}
              >
                Romantic
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => func(Movie.imdbID)}
                variant="danger"
                size="lg"
              >
                Delete Movie
              </Button>
            </div>
          )}
          <hr />
        </Card.Body>
      </Card>
    </div>
  );
};
