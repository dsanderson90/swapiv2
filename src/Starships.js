import React from 'react';

const Starships = (props) => {
  return (
    <div>
      {JSON.stringify(props.starships)}
      </div>
  )
}

export default Starships