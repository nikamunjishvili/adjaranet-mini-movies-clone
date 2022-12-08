import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import NoImage from './error-icon-32.png';
import '../Styles/Videos.css'
import TrailerTrends from '../Trailers/TrailerTrends';

function Trends() {
  const [trendArray,setTrendArray] = useState([])
  const [trailer,setTrailer] = useState(true);
  const [trendsTitle,setTrendsTitle] = useState('')
  const Api  = 'https://api.themoviedb.org/3';
  const TrendsShown = '/trending/all/week'
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const Trends = async() => {
    const data = await axios.get(`${Api}${TrendsShown}`,{
      params:{
        api_key:'2b723033e5f6eaca8a17136d89fe3d71',
      }
    })
    const results = data.data.results
    setTrendArray(results)
  }
  useEffect(() => {
    setTimeout(() => {
      Trends()
    },100)
  },[])
  const TrendsTitle = (trend) => {
    setTrendsTitle(trend.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className='movies-container'>
        {trendArray.map((trend) => {
          return(
            <Fragment>
            <div id='container'>
            <i className="fa-solid fa-circle-play" id="playIcon" onClick={() => TrendsTitle(trend)}/>
            <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImage} alt="" onClick={() => TrendsTitle(trend)}/>  
            <h3>{trend.title}{trend.name}</h3>
            </div>
            </Fragment>
            
          )
        })}
              {trailer ? console.log : <TrailerTrends trendsTitle={trendsTitle} />}
      </div>
    </Fragment>
  )
}

export default Trends