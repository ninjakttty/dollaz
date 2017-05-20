import React, { Component } from 'react'
import PieChart from './Chart'
import Controls from './Controls'
import data from '../data'


export default class Hello extends Component {

  constructor(props) {
    super(props)
    this.state = data
    console.log('data', data);

  }

  add5 = () => {
    const newArr = this.state.userData.map( (item) => {
      if(item.id === 'mil'){
        console.log('found')

        item.value = item.value + 5
      }
      return item;
    })

    this.setState({
      userData: newArr
    })

  }

  sub5 = () => {
    const newArr = this.state.userData.map( (item) => {
      if(item.id === 'mil'){
        item.value = item.value - 5
      }
      return item;
    })

    this.setState({
      userData: newArr
    })
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
        <Controls
          add5={this.add5}
          sub5={this.sub5}
        />
        <link href='https://fonts.googleapis.com/css?family=Khula' rel='stylesheet' />
        <div>Chart ... </div>
        <PieChart data={this.state.userData} />
        <PieChart data={this.state.us2015} />
      </div>
    )
  }
}

