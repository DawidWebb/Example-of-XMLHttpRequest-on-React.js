import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      console.log(xhr.status);
      console.log(typeof xhr.response);
    };
    xhr.send();
  }
  render() {
    return <div />;
  }
}

export default App;
