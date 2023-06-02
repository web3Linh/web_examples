import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }

  // 鼠标移入、移出的回调
  handleMouse = (flag) => {
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (e) => {
      // console.log(id,e.target.checked)
      this.props.updateTodo(id,e.target.checked)
    }
  }

  // 删除一个todo的回调
  handleDelete = (id) => {
    return () => {
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
