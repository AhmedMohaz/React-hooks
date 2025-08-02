
import React from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Row className="d-flex justify-content-center">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </Row>
  );
};

export default MovieList;
