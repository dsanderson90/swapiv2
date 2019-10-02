import React from 'react';
import Container from './components/Container'
import Char from './Char'
const Chars = (props) => {
  let { chars } = props;
  return (
    <Container>
    {chars.map( char =>
      <Char
        name={char.name}
        birth_year={char.birth_year}
        sex={char.sex}
        homeworld={char.homeworld}
        height={char.height}
        mass={char.mass}
        eyecolor={char.eyecolor}
      />
    )}
    </Container>
  )

}

export default Chars