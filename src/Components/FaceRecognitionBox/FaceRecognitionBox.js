import React from 'react';
import './FaceRecognitionBox.css';

// const imageUrl = "https://craft-mart.com/wp-content/uploads/2018/07/trees-paiting-ideas-diy-wall-art.jpg.webp"

const FaceRecognition = () => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' width='500px' heigh='auto'/>
        {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> */}
      </div>
    </div>
  );
}

export default FaceRecognition;