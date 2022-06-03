import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation.js";
import ImageLinkForm from "./Components/ImageFormLink/ImageFormLink";
import Colors from "./Components/Colors/Colors";
import FaceRecognition from "./Components/FaceRecognitionBox/FaceRecognitionBox";
import Clarifai from "clarifai";

// API SETUP
const app = new Clarifai.App({
  apiKey: "7eb271450c424236b9156b56692b52ef",
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      colorsArray: [],
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClicked = () => {
    console.log("clicked");

    app.models
      .predict(
        "eeed0b6733a644cea07cf4c60f87ebb7",
        this.state.input
        // "https://images.unsplash.com/photo-1654214720332-77a6a9c0e0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      )
      .then((response) => {
        let count = response.outputs[0].data.colors.length
        for(let i=0; i<count; i++){
          this.state.colorsArray.push(response.outputs[0].data.colors[i].w3c.hex)
        }
        this.forceUpdate()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        {this.state.colorsArray.map((color) => {
          return <p>{color}</p>
        })}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonClicked={this.onButtonClicked}
        />
        <FaceRecognition imageUrl={this.state.input} />
      </div>
    );
  }
}

export default App;
