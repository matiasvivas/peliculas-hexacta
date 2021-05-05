import React, { Component } from 'react';
import './styles.css';
import MovieCard from '../../components/MovieCard/index';
import Footer from '../../components/Footer/index';
import {useState, useEffect} from 'react';

 const Home= ()=>{

 const [premiere, setPremier]=useState([]);
 
  function getPremiere() {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=acd2849521817b153ed4fcbd82583faa&language=es-ES&primary_release_year=2021')
      .then(data => data.json())
  }

  useEffect(() => {
    getPremiere()
      .then(premiere => {
          //setPremier({premiere:json.results.slice(0,12)})
          setPremier(premiere)
      })
  }, []);

  //const { premiere} = this.state;
  return(
      <div className='Home'>
        <div className='container-flex'>
    
            <div className='col-12 anchor' id='premiere'>
                <h1>Posters</h1>
                <div className='row'>
                  <div className='col-12 text-left'>
                  </div>
                      {premiere.map(movie => <MovieCard movie ={movie} key={movie.id}/>)}
                </div>
              </div> 
        </div>
        <Footer />   
      </div>
    );
};
export default Home;

