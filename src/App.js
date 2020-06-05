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
      const users = JSON.parse(xhr.response);
      this.setState({ users });
    };
    xhr.send();
  }
  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    ));
    return <div>{users}</div>;
  }
}

export default App;
