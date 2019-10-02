import React, { Fragment } from 'react';

const Planets = props => {
  return (
    <Fragment>
      <h1>{props.name}</h1>
      <h1>{props.rotation_period}</h1>
      <h1>{props.climate}</h1>
      <h1>{props.orbital_period}</h1>
      <h1>{props.surface_water}</h1>
    </Fragment>
  );
};

export default Planets;
