import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import ImageLinkForm from './Components/ImageFormLink/ImageFormLink';
import Colors from './Components/Colors/Colors';
import FaceRecognition from './Components/FaceRecognitionBox/FaceRecognitionBox';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Colors />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
