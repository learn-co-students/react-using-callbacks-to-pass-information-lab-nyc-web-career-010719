import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  setNewColor = () => {
    const newColor = this.props.currentColorFunc()
    this.setState({color: newColor})
  }

  render() {

    return (
      <div className="cell" onClick={this.setNewColor} style={{backgroundColor: this.state.color}}>
      </div>

    )
    debugger
  }

}
