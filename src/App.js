import React, { Component } from "react";

import Result from "./components/Result";
import Buttons from "./components/Buttons";

import "./style.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      result: ''
    };
  }

  buttonClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: 'Invalid Input'
      });
    }
  };

  reset = () => {
    this.setState({
      result: ''
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className = "mainContainer">
        <div className="calculatorMainContainer">
			<div className="headerContainer">
				<div className="header">
					<div className="heading">React - Simple calculator</div>
				</div>
			</div>
          <Result result={this.state.result} />
          <Buttons buttonClick={this.buttonClick} />
        </div>
      </div>
    );
  }
}

export default App;
