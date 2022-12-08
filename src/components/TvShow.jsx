import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import NoImage from './error-icon-32.png';
import '../Styles/Videos.css'
import TrailerTvShows from '../Trailers/TrailerTvShows';


function TvShow() {
  const [showData,setShowData] = useState([])
  const [trailer,setTrailer] = useState(true);
  const [title,setTitle] = useState('')
  const Api = "https://api.themoviedb.org/3/discover/tv"
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const TVShows = async () => {
  const data = await axios.get(Api,{
  params: {
    api_key: '2b723033e5f6eaca8a17136d89fe3d71'
  }
})
const results = (data.data.results)
setShowData(results)
}
useEffect(() => {
  setTimeout(() => {
     TVShows()
  },100)
 
},[])

const TvShowTitle = (shows) => {
  setTitle(shows.name)
  setTrailer(!trailer)
}
  return (
    <Fragment>
      <div className='movies-container'>
      {showData.map((shows) => {
        return(
          <Fragment>
            <div id='container'>
            <i className="fa-solid fa-circle-play" fontSize={40} id="playIcon" onClick={() => TvShowTitle(shows)}/>
            <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImage} alt="" onClick={() => TvShowTitle(shows)} />  
            <h3 id={shows.name.length > 28 ? 'smaler-text' : ''}>{shows.name}</h3>
            </div>
            </Fragment>
        )
      })}
      {trailer ? console.log : <TrailerTvShows TvShowsTitle={title} />}
      </div>
    </Fragment>
  )
}

export default TvShow