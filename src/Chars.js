import React from 'react';
import Container from './components/Container'

const Chars = (props) => {
  let { chars } = props;
  return (
    <Container>
    {chars.map( char =>
      <div>
        <h1>{char.name}</h1>
        <p>{char.birth_year}</p>
        <p>Sex: {char.gender}</p>
        <p>Homeworld: {char.homeworld}</p>
        <p>Height: {char.height}</p>
        <p>Mass: {char.mass}</p>
        <p>Eye Color: {char.eyecolor}</p>
        <p>{char.homeworld}</p>
      </div>
    )}
    </Container>
  )

}

export default Chars