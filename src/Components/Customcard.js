import React from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Movielist } from "./Movielist";

export const Customcard = ({ Movie = {}, func, insearchForm }) => {
  const { Title, Poster, imdbRating } = Movie;
  return (
    <div>
      <Card className="mt-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title>Rating:{imdbRating}</Card.Title>
          {insearchForm ? (
            <div className="d-flex justify-content-between mt-5">
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
