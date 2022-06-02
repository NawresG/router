import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { movieList } from './../../data';

const MovieDetail = ({movieList}) => {
  const {id}=useParams()
  const [move,setMove]=useState("")
  useEffect(()=>{
    setMove(movieList.find(el=>el.id==id))
  }, [id])
  return (
    <div> 
      <h1>{move.title}</h1>
      <h1>{move.description}</h1>
      <iframe width="560" height="315" src={move.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
  )
}

export default MovieDetail