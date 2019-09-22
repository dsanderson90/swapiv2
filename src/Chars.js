import React from 'react';


const Chars = (props) => {
  return (
    props.chars.map( char =>
      <div>
        {char.name}
        {char.homeworld}
      </div>
    )
  )

}

export default Chars