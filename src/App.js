import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";
import Search from "./components/Search";

const Featured_Api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=15";
const Img_Api = "https://image.tmdb.org/t/p/w1280";
const Search_Api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(Featured_Api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleonSubmit = (searchTerm) => {
    fetch(Search_Api + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  return (
    <>
      <Search onChange={handleonSubmit} />

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          ))}
      </div>
    </>
  );
}

export default App;
//rafce -> react arrow function component react
