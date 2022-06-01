import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation.js";
import ImageLinkForm from "./Components/ImageFormLink/ImageFormLink";
import Colors from "./Components/Colors/Colors";
import FaceRecognition from "./Components/FaceRecognitionBox/FaceRecognitionBox";
import Clarifai from 'clarifai';

// API SETUP
const app = new Clarifai.App({
  apiKey: '7eb271450c424236b9156b56692b52ef'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonClicked = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log('Res', response)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Colors />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonClicked={this.onButtonClicked}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
