import React, { Fragment } from 'react';


const Film = (props) => {
  return (
    <Fragment>
        <h1>Starwars</h1>
        <p>Episode:
        {props.episode_id === 1 ? ' I'
         : props.episode_id === 2 ? ' II' :
         props.episode_id === 3 ? ' III' :
         props.episode_id === 4 ? ' IV' :
         props.episode_id === 5 ? ' V' :
         props.episode_id === 6 ? ' VI' : ''}
        </p>
        <h1>{props.title}</h1>
        <img src={props.link} alt='film-poster' className='img-fluid logo'/>
        <p>{props.opening_crawl}</p>
    </Fragment>
  )

}

export default Film