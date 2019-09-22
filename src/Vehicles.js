import React from 'react';
import Container from './components/Container'

const Vehicles = (props) => {
  const { vehicles } = props
  return (
    <Container>
      <pre>{JSON.stringify(vehicles)}</pre>
      {vehicles.map(v =>
        <div>
          {v.name}
          {}
        </div>
      )
      }
    </Container>
  )
}

export default Vehicles