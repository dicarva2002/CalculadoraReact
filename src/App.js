import { render } from "@testing-library/react";
import React from "react";
import ButtonPanel from "./comps/ButtonPanel";
import Display from "./comps/Display";
import Calculate from "./logic/calculate";
import "./App.css"

export default class APP extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };
  handleClick = buttonName => {
    this.setState(Calculate(this.state, buttonName));
  }
  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"}></Display>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}