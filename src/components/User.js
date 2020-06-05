import React from "react";
import "./User.css";

const User = (props) => (
  <div className="container" key={props.id}>
    <h4>Player name: {props.name}</h4>
    <p>eMail: {props.email}</p>
    <p>web: {props.web}</p>
  </div>
);
export default User;
