import React, { Component } from 'react'
import PieChart from './Chart'
import Controls from './Controls'

export default class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {},
      actualData: {},
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
      p {
        color: black;
      }
      div {
        background: white;
        font-family: 'Khula', sans-serif;
      }
    `}</style>
        <link href='https://fonts.googleapis.com/css?family=Khula' rel='stylesheet' />
        <div>Chart ... </div>
        <PieChart />
        <Controls />
      </div>
    )
  }
}

