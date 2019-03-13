import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    // console.log(this.props.getSelectedColor())
    const newColor = this.props.getSelectedColor()
    // debugger
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
      >

      </div>
    )
  }

}
