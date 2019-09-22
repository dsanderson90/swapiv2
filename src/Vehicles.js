import React from 'react';

const Vehicles = (props) => {
  return (
    <div>
      {JSON.stringify(props.vehicles)}
      </div>
  )
}

export default Vehicles