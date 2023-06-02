import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = {
        name:'张张'
    }

    changeName = () => {
        this.setState({name:'BoBo'})
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     // console.log(this.props, this.state) //目前的props、state
    //     // console.log(nextProps, nextState)   //按下要变化的目标props，目标state
    //     if(this.state.name === nextState.name) return false
    //     else return true
    // }

    render() {
        console.log('调用了parent---render')
        return (
            <div className='parent'>
                <h2>我是Parent组件</h2>
                <span>我的名字是：{this.state.name}</span>
                <br />
                <button onClick={this.changeName}>点我改名</button>
                <Child changeName = {this.state.name}/>
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState){
    //     // console.log(this.props, this.state)
    //     // console.log(nextProps, nextState)
    //     if(this.props.name === nextProps.name) return false
    //     else return true
    //     // return !this.props.name === nextProps.name
    // }

    render() {
        console.log('调用了child---render')
        return (
            <div className='child'>
                <h2>我是Child组件</h2>
                <span>我接收到的车是：{this.props.changeName}</span>
            </div>
        )
    }
}