import React from 'react';
import Container from './components/Container'

const Planets = (props) => {
  return (
    <Container>
    {props.planets.map( planet =>
      <div>
        <h1>{planet.name}</h1>
      </div>
      )
    }
    </Container>
  )
}

export default Planets