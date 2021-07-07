import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../ComentariosModal/comentariosModal';

const MovieCard = (props) => {

    const [modal, setModal] = useState(false);

    const selectModal = (info) => {
        setModal(!modal)
    }

    return (
        <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 float-left text-center movieCard" key={props.movie.id}>
            <Link to={`/movie/${props.movie.id}`}>
                <img className="img-thumbnail thumb" alt="poster" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
                <h5>Titulo: {props.movie.title}</h5>
                <p>Año de lanzamiento: {props.movie.release_date}</p>
                <p>Generos: {props.movie.genre_ids}</p>
            </Link>
            <br></br>
            <div className="App">
                <button id="comentarios" onClick={() => selectModal()} className="form-control"
                >Comentarios</button>
                <Modal
                    displayModal={modal}
                    closeModal={() => selectModal()}
                    movieId={props.movie.id}
                    titulo={props.movie.title}
                />
            </div>
        </div>
    )
}
export default MovieCard;