import React from 'react';
import Container from './components/Container';

const Species = (props) => {
  const { species } = props
  return (
    <Container>
      {species.map( ({name, language, skin_colors, average_lifespan, classification, designation }, i) =>
      <div key={i}>
        <h1>{name}</h1>
        <p>Classification: {classification.slice(0, 1).toUpperCase() + classification.slice(1, classification.length)}</p>
        <p>Lifespan: {average_lifespan} years </p>
        <p>{designation.slice(0, 1).toUpperCase() + designation.slice(1, designation.length)}</p>
        <p>Speaks: {language}</p>
        <p>Can be: {skin_colors.split(' ').map(el => el.slice(0, 1).toUpperCase() + el.slice(1, el.length)).join(' ')}</p>
      </div>
    )}
    </Container>
  )
}

export default Species