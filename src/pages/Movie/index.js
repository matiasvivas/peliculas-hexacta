import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/index";
 
const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  const fetchMovie = async () => {
    try {
      const movie_id = Object.values(props.match.params);
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=acd2849521817b153ed4fcbd82583faa&language=es-ES`;
      const response = await fetch(url);
      const responseJson = await response.json();
      const movie = responseJson;
      setMovie(movie);
    } catch (e) {
      console.log(e);
    }
  };
 
  useEffect(() => {
    fetchMovie();
    return () => {};
  }, []);
 
  if (!movie) return <p>Cargando...</p>;
 
  return (
    <div>
      <div>
        <h1>Detalle de pelicula</h1>
 
        <div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 float-left p-2 my-2 text-center">
            <img
              className="poster"
              alt="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9 col-xl-9 float-left p-8 my-4 text-left">
            <h2> {movie.title}</h2>
            <p>Sinopsis: {movie.overview}</p>
            <p>Director: {}</p>
            <p>Actores: {}</p>
            <p>Duracion: {}</p>
            <p>Premios obtenidos: {}</p>
          </div>
        </div>
      </div>
 
      <Footer />
    </div>
  );
};
export default Movie;