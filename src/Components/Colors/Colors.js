import React from 'react';

const Colors = ({colorsArray}) => {
  return (
    <>
      <div className='white f2'>
        <h1>This are the Colors: {colorsArray}</h1>
        {/* {colorsArray.map((color) => {
          return <p>{color}</p>
        })} */}
      </div>
    </>
  );
}

export default Colors;