import React, { Fragment } from 'react';


const Char = (props) => {
  return (
    <Fragment>
        <h1>{props.name}</h1>
        <p>{props.birth_year}</p>
        <p>Sex: {props.gender}</p>
        <p>Homeworld: {props.homeworld}</p>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
        <p>Eye Color: {props.eyecolor}</p>
        <p>{props.homeworld}</p>
    </Fragment>
  )
}
export default Char