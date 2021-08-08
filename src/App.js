import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const Featured_Api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const Img_Api = "https://image.tmdb.org/t/p/w1280";
const Search_Api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const[searchTerm,setSearchTerm]= useState('');

  useEffect(() => {
    fetch(Featured_Api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleonSubmit = (e) => {
    e.preventDefault();


    if(searchTerm){
      fetch(Search_Api + searchTerm)
      .then((res)=> res.json())
      .then((data)=>{
        setMovies(data.results);
      });
      setSearchTerm("");
    }
  };
  

  const handleonChange = (e) => {
    setSearchTerm(e.target.value);
  };
   
  return (
    <>
     <header>
       <form onSubmit={handleonSubmit}>
          <input className="search" type="search" placeholder="search" value={searchTerm} onChange={handleonChange} />
       </form>
        </header>
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
