// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsynAction
} from '../../redux/count_action_creators'

// 引入connect 用于连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'

// UI组件
class Count extends Component {

    // 加法
    increment = () => {
        // 获取值
        const { value } = this.selectNumber
        // store.dispatch(createIncrementAction(value * 1))
        this.props.jia(value*1)
    }
    // 减法
    decrement = () => {
        // 获取值
        const { value } = this.selectNumber
        // store.dispatch(createDecrementAction(value * 1))
        this.props.jian(value*1)
    }

    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        // const count = store.getState()
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    // 异步加
    incrementAsync = () => {
            const { value } = this.selectNumber
            this.props.jiaAsyn(value * 1,500)

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={(c) => { this.selectNumber = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state }),
    // dispatch => ({
    //     jia: number => dispatch(createIncrementAction(number)),
    //     jian: number => dispatch(createDecrementAction(number)),
    //     jiaAsyn: (number, time) => dispatch(createIncrementAsynAction(number, time)),
    // })
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsyn: createIncrementAsynAction,
    }
)(Count)
