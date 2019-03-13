import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const handleSelectColor = () => {this.props.setSelectedColor(str)}
      // const handleSelectColor = () => {this.props.setSelectedColor(str)}
      return <div key={idx} onClick={handleSelectColor} className="color-swatch" style={{backgroundColor: str}} />
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
