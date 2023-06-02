import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

// ctrl+c ctrl+f -- 查找替换
export default class App extends Component {
  // 初始化
  state = {
    todos:[
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '敲代码', done: false},
      {id: '004', name: '逛街', done: false}
    ]
  }

  // addTodo用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({todos:newTodos})
    // console.log(this.state)
  }

  // updateTodo用于更新一个todo对象
  updateTodo = (id,done) => {
    // 获取todos
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo = (id) => {
    // 获取原来的todos
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done:done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = ()=>{
    const {todos} = this.state
    // 过滤已经完成的任务
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos = {this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
