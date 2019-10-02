import React from 'react';
import Container from './components/Container'
import Film from './Film'

const Films = (props) => {
  const links = ["http://www.coverwhiz.com/content/Star-Wars-Episode-I-The-Phantom-Menace.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-II-Attack-Of-The-Clones.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-III-Revenge-Of-The-Sith.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-IV-A-New-Hope.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-V-The-Empire-Strikes-Back.jpg", "http://www.coverwhiz.com/content/Star-Wars-Episode-VI-Return-Of-The-Jedi.jpg", "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"]
  const {films} = props;
  return (

    <Container>
    {films.map( (film, i) =>
    <Film
      key={i}
      episode_id={film.episode_id}
      link={links[i]}
      opening_crawl={film.opening_crawl}
    />
    )}

    </Container>
  )

}

export default Films