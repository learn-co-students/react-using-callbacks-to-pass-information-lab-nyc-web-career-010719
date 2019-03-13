import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  setCellColor = (selectedColor) => {
    console.log("reached cell color")
    this.setState({
      color: selectedColor
    })
  }

  updateCellColor = () => {
    this.setState({
      color: this.props.getSelectedColor()
    })
  }


  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
      onMouseOver={this.updateCellColor}>
      </div>
    )
  }

}
