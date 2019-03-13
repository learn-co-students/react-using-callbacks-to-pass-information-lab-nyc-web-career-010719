import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: null
    }
  }

  setColor = (newColor) => {
    this.setState({color: newColor})
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColorFunc={this.currentColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  currentColor = () => (this.state.color)


  render() {
    // console.log(this.setColor);
    return (
      <div id="app" >
        <ColorSelector setColorFunc={this.setColor}/>
        <div id="matrix" >
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
