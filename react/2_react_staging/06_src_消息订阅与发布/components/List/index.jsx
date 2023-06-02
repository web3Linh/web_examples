import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
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

    // 消息订阅
    componentDidMount(){
        this.token = PubSub.subscribe('pink',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    // 组件即将要要被卸载掉时取消订阅
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2>:
                    isLoading ? <h2>Loading......</h2>:
                    err ? <h2 style={{color:'red'}}>{err}</h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel='noreferrer' href={userObj.html_url} target="_blank">
                                    <img alt='head_portrait' src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
