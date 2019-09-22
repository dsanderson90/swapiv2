import React from 'react';

const Planets = (props) => {
  return (
    props.planets.map( planet =>
      <div>
        {planet.name}
      </div>
    )
  )
}

export default Planets