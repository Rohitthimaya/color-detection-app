import React from 'react';
import './ImageFormLink.css';

const ImageLinkForm = ({onInputChange, onButtonClicked}) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect color\'s in your pictures.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib #FF5EDF bg-#04C8DE'
            onClick={onButtonClicked}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;