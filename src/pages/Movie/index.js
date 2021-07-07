import React, { Component } from 'react';
import Comentarios from '../../components/comentariosComponent/Comentarios';
import Footer from '../../components/Footer/index';
import Loading from '../../components/Loading';

class Movie extends Component {

  movie_id = Object.values(this.props.match.params);

  componentWillUnmount() {
    clearInterval(this.timer)
  }



    constructor(props) {
        super(props);
        this.state = {
          test:false,
          movie: [],
          comentario: '',
          listComment : []
        };
      };

      // llamando a la api themoviedb
      async componentDidMount() {
        try { 

    
          this.timer = setTimeout(() => { this.setState({ test: !this.state.test }) }, 2000);

            //const movie_id = Object.values(this.props.match.params);
            const url = `https://api.themoviedb.org/3/movie/${this.movie_id}?api_key=acd2849521817b153ed4fcbd82583faa&language=es-ES`;
            const response = await fetch(url);
            const responseJson = await response.json();
            const movie = responseJson;
            this.setState({movie});
        } catch(e) {
            console.log(e);
        }
      };

 // Render
 //TODO: no aparecen dir, act, dur ni premios

   render() {
    const { movie} = this.state;
    if(!this.state.test){
      return(<Loading/>)
    }
    else{
        return (
            <div>
              <div>
                <h1>Detalle de pelicula</h1>
                 
                <div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 float-left p-2 my-2 text-center">
                            <img className="poster" alt="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                         </div>
                         <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9 col-xl-9 float-left p-8 my-4 text-left">
                            <h2> {movie.title}</h2>
                            <p>Sinopsis: {movie.overview}</p>
                            <p>Director: {}</p>
                            <p>Actores: {}</p>
                            <p>Duracion: {}</p>
                            <p>Premios obtenidos: {}</p>
                        </div>
                        <Comentarios movieId = {movie.id}/> {/*Utilizar propsTypes*/ }
                        {/*TODO: Utilizar router con un boton de volver*/} 

                        {/*Desestructuracion de objetos
                        Reemplazar useState por customHooks*/}
                    </div>
              </div>
                      
            <Footer />
            </div>
        )}
    };
};
export default Movie;