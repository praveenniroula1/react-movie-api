import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import "./App.css";
import { Searchform } from "./Components/Searchform";
import { Customcard } from "./Components/Customcard";
// import { Customlist } from "./Components/Customlist";
import { Movielist } from "./Components/Movielist";
import { fetchMovieInfo } from "./helpers/Axios";
function App() {
  const [Movie, setMovie] = useState({});
  const [showError, setShowError] = useState("");
  const [movielist, setMovielist] = useState([]);
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);

    console.log(result);
    setMovie(result);
    result.Response === "False" ? setShowError(result.Error) : setShowError("");
  };

  console.log(Movie);
  const movieSelect = (move) => {
    setMovielist([...movielist, move]);
    setMovie({});
  };

  const deletMovie = (imdbID) => {
    if (window.confirm("Are you sure you want to delet the Movie?")) {
      const filteredArg = movielist.filter((item) => item.imdbID !== imdbID);
      setMovielist(filteredArg);
    }
  };
  return (
    <div className="wrapper">
      <Container>
        <Searchform handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          {Movie.imdbID && (
            <Customcard Movie={Movie} func={movieSelect} insearchForm={true} />
          )}
          {showError && <Alert variant="danger">{showError}</Alert>}
        </div>
        <hr />
        <Movielist movielist={movielist} deletMovie={deletMovie} />
      </Container>
    </div>
  );
}

export default App;
