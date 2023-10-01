import React, { Component } from 'react'
import spiner from './spiner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spiner} alt="loading" width='40px' height='40px' />
      </div>
    )
  }
}

export default Spinner
