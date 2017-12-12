import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./view/header.js";
import BodyComponent from "./view/bodyComponent.js";
import ToDoItems from "./view/toDoItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyComponent />
      </div>
    );
  }
}

export default App;
