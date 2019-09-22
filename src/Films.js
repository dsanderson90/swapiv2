import React from 'react';
import Container from './components/Container'

const Films = (props) => {
  const links = ["http://www.coverwhiz.com/content/Star-Wars-Episode-I-The-Phantom-Menace.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-II-Attack-Of-The-Clones.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-III-Revenge-Of-The-Sith.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-IV-A-New-Hope.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-V-The-Empire-Strikes-Back.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-VI-Return-Of-The-Jedi.jpg", "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"]
  const {films} = props;
  return (

    <Container>
    {films.map( (film, i) =>
      <div key={film.episode_id}>
        <h1>Starwars</h1>
        <p>Episode:
        {film.episode_id === 1 ? ' I'
         : film.episode_id === 2 ? ' II' :
         film.episode_id === 3 ? ' III' :
         film.episode_id === 4 ? ' IV' :
         film.episode_id === 5 ? ' V' :
         film.episode_id === 6 ? ' VI' : ''}
        </p>
        <h1>{film.title}</h1>
        <img src={links[i]} alt='film-poster' className='img-fluid logo'/>
        <p>{film.opening_crawl}</p>
      </div>
    )}

    </Container>
  )

}

export default Films