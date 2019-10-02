import React, { Fragment } from 'react';

const Specie = props => {
  return (
    <Fragment key={props.i}>
      <h1>{props.name}</h1>
      <p>
        Classification:{' '}
        {props.classification.slice(0, 1).toUpperCase() +
          props.classification.slice(1, props.classification.length)}
      </p>
      <p>Lifespan: {props.average_lifespan} years </p>
      <p>
        {props.designation.slice(0, 1).toUpperCase() +
          props.designation.slice(1, props.designation.length)}
      </p>
      <p>Speaks: {props.language}</p>
      <p>
        Can be:{' '}
        {props.skin_colors
          .split(' ')
          .map(el => el.slice(0, 1).toUpperCase() + el.slice(1, el.length))
          .join(' ')}
      </p>
    </Fragment>
  );
};

export default Specie;
