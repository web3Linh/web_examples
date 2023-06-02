import React, { Component } from 'react'
import './index.css'

// 创建MyContext对象 -- Context常用于祖组件与后代组件间通信
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
    state = {
        username: 'tom',
        age: 19
    }

    render() {
        const { username, age } = this.state
        return (
            <div className='father'>
                <h3>我是A组件</h3>
                <h4>我的用户名是：{username}，我的年龄是：{age}</h4>
                <Provider value={{ username, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div className='son'>
                <h3>我是B组件</h3>
                <h4>我的用户名是：{ }</h4>
                <C />
            </div>
        )
    }
}

// class C extends Component {
//     // 声明接收context
//     static contextType = MyContext
//     render() {
//       return (
//         <div className='grand'>
//           <h3>我是C组件</h3>
//           <h4>我从A组件接收到的用户名是：{this.context.name}，我的年龄是：{this.context.age}</h4>
//         </div>
//       )
//     }
//   }

// 函数式组件
function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是：
                <Consumer>
                    {
                        value => {
                            return `${value.username},年龄是：${value.age}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}