import React, { useState, useEffect } from 'react';
import './styles.css';
import MovieCard from '../../components/MovieCard/index';
import Footer from '../../components/Footer/index';
import LoginModal from '../../components/login/LoginModal';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=acd2849521817b153ed4fcbd82583faa&language=es-ES&primary_release_year=2021'
});

const Home = () => {

  const [premier, setPremier] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api.get('/').then(res => {
      console.log("Peliculas por Axios: " + res.data.results.slice(0, 12));
      setPremier(res.data.results.slice(0, 12));
    }, []);

}, []);

  const selectModal = (info) => {
    setModal(!modal)
  }

  return (
    <div className='Home'>
      <div className='container-flex'>
        <div className='col-12 anchor' id='premiere'>
          <h1 className="posterAlign" id="componentTest">Posters</h1>
          <div className="App">
            <button onClick={() => selectModal()} className="form-control"
            >Login</button>
            <LoginModal
              displayModal={modal}
              closeModal={() => selectModal()}
            />
          </div>
          <div className='row'>
            <div className='col-12 text-left'>
            </div>
            {premier.map(movie => <MovieCard movie={movie} key={movie.id} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

