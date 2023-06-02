import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    // 初始化状态
    state = {
        users:[],
        // 是否为第一次打开页面
        isFirst:true,
        // 标识是否处于加载中
        isLoading:false,
        // 存储请求相关的错误信息
        err:'',
    }
    
    // 更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                {/* 将传过来的users给list做展示--批量传递 */}
                <List {...this.state}/>
            </div>
        )
    }
}
