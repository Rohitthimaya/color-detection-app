import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import ImageLinkForm from './Components/ImageFormLink/ImageFormLink';
import Colors from './Components/Colors/Colors';
import FaceRecognition from './Components/FaceRecognitionBox/FaceRecognitionBox';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonClicked = () => {
    console.log("Clicked!")
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Colors />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClicked={this.onButtonClicked} />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
