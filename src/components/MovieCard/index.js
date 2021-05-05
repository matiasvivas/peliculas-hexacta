import { Link } from 'react-router-dom';

const MovieCard= (props)=>{

    const movie = {
        id = props.movie.id,
        title = props.movie.title,
        release_date=props.movie.release_date,
        genre_ids = props.movie.genre_ids
    };
    
        return(
            <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 float-left text-center movieCard" key={movie.id}>
               <Link to={`/movie/${movie.id}`}>
                <img className="img-thumbnail thumb" alt="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <h5>Titulo: {movie.title}</h5>
                <p>Año de lanzamiento: {movie.release_date}</p>
                <p>Generos: {movie.genre_ids}</p>
                </Link>
            </div>
        )
    };
export default MovieCard;