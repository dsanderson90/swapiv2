import React from 'react';


const Films = (props) => {
  return (
    props.films.map( film =>
      <div>
        Starwars_ Episode:
        {film.episode_id === 1 ? ' I'
         : film.episode_id === 2 ? ' II' :
         film.episode_id === 3 ? ' III' :
         film.episode_id === 4 ? ' IV' :
         film.episode_id === 5 ? ' V' :
         film.episode_id === 6 ? ' VI' : ''}
           <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
      </div>
    )
  )
}

export default Films