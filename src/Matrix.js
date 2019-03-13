import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: ""
    }
  }

  setColor = (selectedColor) => {
    console.log("clicked color");
    this.setState(
      {color: selectedColor})
  }

  changeColor(newColor) {
    this.setState({color: newColor})
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor={this.state.color}/>)
    //                                 need to put in so the Cell can ^^ accept as a prop
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        {/*             ^^need to throw in so that ColorSelector can accept as prop*/}
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
