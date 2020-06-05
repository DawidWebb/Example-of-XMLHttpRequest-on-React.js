import React, { Component } from "react";
import User from "./User";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      const users = JSON.parse(xhr.response);
      this.setState({ users });
    };
    // xhr.addEventListener('load', ()=>{})
    xhr.send();
  }
  render() {
    const users = this.state.users.map((user) => (
      <User
        key={user.id}
        name={user.name}
        email={user.email}
        web={user.website}
      />
    ));
    return <div>{users}</div>;
  }
}

export default App;
