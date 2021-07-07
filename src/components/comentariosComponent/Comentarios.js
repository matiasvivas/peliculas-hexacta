import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './modal.css';
import { UserContext } from '../../contexts/UserContext';

const Comentarios = (props) => {

    const initialList = [];
    const [list, setList] = useState(initialList);
    const [datos, setDatos] = useState({ comentario: '' });
    const { usuario } = useContext(UserContext);

    const addList = event => {
        if (datos) {
            setList([...list, datos.comentario])
        }

    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=acd2849521817b153ed4fcbd82583faa&language=es-ES`;

        fetch(url).then(async (response) => {
            var json = await response.json();
            const movie = json;
            console.log(movie);
        });

    }, []);

    /*const pelicula = {
        titulo : props.movie.title,
        sinopsis: props.movie.overview,
        id: props.movieId
     };*/

    //const {titulo, sinopsis, id} = pelicula;

    const save = () => {
        addList();
        localStorage.setItem(`comentary_${props.movieId}`, JSON.stringify(list));
        document.getElementById("comentado").value = "";
    }

    const UsuarioLogueado = () => {
        return (
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9 col-xl-9 float-left p-8 my-4 text-left">
                <h5>{usuario} coméntanos, ¿Qué te pareció la película?</h5>
                <input id="comentado" type="text" placeholder="Escriba su comentario" className="form-control" onChange={handleInputChange} name="comentario"></input>
                <button id="btnComentar" onClick={() => save()} className="form-control">Comentar</button>
                <Link to='/'>
                    <button id="btnComentar" className="form-control">Atras</button>
                </Link>

            </div>
        )
    }

    const UsuarioNoLogueado = () => {
        return (
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9 col-xl-9 float-left p-8 my-4 text-left">
                <h5>Debe loguearse para poder comentar</h5>
                <input disabled id="comentado" type="text" placeholder="Escriba su comentario" className="form-control" onChange={handleInputChange} name="comentario"></input>
                <button disabled id="btnComentar" onClick={() => save()} className="form-control">Comentar</button>
                <Link to='/'>
                    <button id="btnComentar" className="form-control">Atras</button>
                </Link>

            </div>
        );
    }

    const ValidandoLogueo = () => {
        if (usuario != null) {
            return <UsuarioLogueado />;
        }
        return <UsuarioNoLogueado />;
    }

    return (
        <ValidandoLogueo />
    );

}
export default Comentarios;