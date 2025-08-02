
import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import moviesData from "./src/moviesData";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(1);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.posterURL && newMovie.description) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">🎬 My Movie App</h1>

      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />

      <MovieList movies={filteredMovies} />

      <hr />
      <h3>Add a New Movie</h3>
      <Form onSubmit={handleAddMovie}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Poster URL</Form.Label>
          <Form.Control
            type="text"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            min={1}
            max={5}
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: Number(e.target.value) })
            }
          />
        </Form.Group>

        <Button type="submit" className="mt-2">Add Movie</Button>
      </Form>
    </Container>
  );
}

export default App;
