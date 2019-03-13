import React, { Component } from 'react';
// import uuid from 'uuid';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const handleClick = () => this.props.setSelectedColor(str);
      return (
        <div
          key={idx}
          className="color-swatch"
          onClick={handleClick}
          style={{backgroundColor: str}}
        />
      )
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
