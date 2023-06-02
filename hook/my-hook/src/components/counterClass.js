import React, { Component } from 'react'

export default class counterClass extends Component {
  constructor (props) { 
    super(props)
    this.state = {
        count: 0
    }
  }

  setCount = (count) => {
    this.setState({
        count: count + 1
    })
  }
    
  render() {
    return (
      <div>
        <p>计数：{this.state.count}</p>
        <button onClick={ () => { this.setCount(this.state.count) }}>按钮</button>
      </div>
    )
  }
}
