import React from 'react';
import Container from './components/Container'
import Planet from './Planet';

const Planets = (props,) => {
  return (
    <Container>
    {props.planets.map( (planet, i) =>
      <Planet
      key={i}
      name={planet.name}
      rotation_period={planet.rotation_period}
      climate={planet.climate}
      orbital_period={planet.orbital_period}
      surface_water={planet.surface_water}
      />
      )
    }
    </Container>
  )
}

export default Planets