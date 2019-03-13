import React, { Component } from "react";

export default class ColorSelector extends Component {
  constructor(props) {
    super(props);
  }

  makeColorSwatches = () =>
    [
      "#F00",
      "#F80",
      "#FF0",
      "#0F0",
      "#00F",
      "#508",
      "#90D",
      "#FFF",
      "#000"
    ].map((str, idx) => {
      const cb = () => {
        this.props.setSelectedColor(str);
      };
      return (
        <div
          key={idx}
          className="color-swatch"
          style={{ backgroundColor: str }}
        />
      );
    });

  clicked = event => {
    this.props.setSelectedColor(event.target.style.backgroundColor);
  };

  render() {
    return (
      <div id="colorSelector" onClick={this.clicked}>
        {this.makeColorSwatches()}
      </div>
    );
  }
}
