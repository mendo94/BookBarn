import React, { Component } from "react";
import Menu from "./Menu";
import App from "../App";
import BookSave from "./BookSave";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <p>Copyright 2022</p>
      </div>
    );
  }
}

export default BaseLayout;
