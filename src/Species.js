import React from 'react';
import Container from './components/Container';
import Specie from './Specie'
const Species = (props) => {
  const { species } = props
  return (
    <Container>
      {species.map( ({name, language, skin_colors, average_lifespan, classification, designation }, i) =>
        <Specie
        key={i}
        name={name}
        language={language}
        skin_colors={skin_colors}
        average_lifespan={average_lifespan}
        classification={classification}
        designation={designation}
        />
    )}
    </Container>
  )
}

export default Species