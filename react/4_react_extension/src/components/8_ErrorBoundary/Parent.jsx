import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasErr:'' //用于标识子组件是否产生错误
  }

//   当Parent的子组件出现报错时，会触发getDeriveStateFromError的调用，并携带错误信息
  static getDerivedStateFromError(error){
    console.log('///',error)
    return {hasErr:error}
  }

  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        {this.state.hasErr ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}
      </div>
    )
  }
}
