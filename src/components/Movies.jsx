import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import ErrorImg from './error-icon-32.png';
import '../Styles/Videos.css';
import TrailerMovies from '../Trailers/TrailerMovies';
import Slider from './Slider'
function Movies() {
  const [moviesData,setMoviesData] = useState([]);
  const Api = `https://api.themoviedb.org/3/discover/movie`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const [trailer,setTrailer] = useState(true);
  const [movieTitle,setMovieTitle] = useState('')
  const MoviesCall = async () => {
    const data = await axios.get(Api,{
      params: {
        api_key: '2b723033e5f6eaca8a17136d89fe3d71',
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      MoviesCall();
    },100)
  },[]) 
  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className='movies-container'>
        <Slider />
        {moviesData.map((movie) => {
        return(
        <Fragment>
          <div id='container'>
          <i className="fa-solid fa-circle-play" fontSize={40} id="playIcon" onClick={() => MoviesTitle(movie)}/>
            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : ErrorImg} alt="" onClick={() => MoviesTitle(movie)}/>
            <h3 id={movie.title.length > 28 ? 'smaler-text' : ''}>{movie.title}</h3>
          </div>
        </Fragment>
        )
      })}
      {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} />}
      </div>
      
      
    </Fragment>
  )
}

export default Movies