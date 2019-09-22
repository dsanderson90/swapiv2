import React from 'react';
import Container from './components/Container'

const Starships = (props) => {
  return (
    <Container>
      {/* {JSON.stringify(props.starships)} */}
    {props.starships.map( ship =>
      <div>
        <h1>{ship.name}</h1>
        <h1>{ship.model}</h1>
        <h1>{ship.starship_class}</h1>
        <h1>{ship.manufacturer}</h1>
      </div>
      )
    }
    </Container>
  )
}

export default Starships