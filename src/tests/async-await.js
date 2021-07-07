export const getPeliculas = async() =>{
    try{
        const resp = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=acd2849521817b153ed4fcbd82583faa&language=es-ES&primary_release_year=2021');
        const {results} = await resp.json();
        const peli = results[4].title;
        return peli;
    }
    catch(error){
        return 'No hay peliculas'
    }
}



