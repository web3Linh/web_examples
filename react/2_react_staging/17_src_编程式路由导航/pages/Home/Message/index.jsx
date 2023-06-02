import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }

    replaceShow = (id,title)=>{
        // 跳转到Detail组件中，且为replace跳转
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        this.props.history.replace(`/home/message/detail`,{id, title})
    }

    pushShow = (id, title)=>{
        // this.props.history.push(`/home/message/detail/${id}/${title}`)
        // replace跳转+携带state参数
        this.props.history.push(`/home/message/detail`,{id, title})
    }

    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    go = ()=>{
        this.props.history.go(-1)
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    <Link to={{pathName:`/home/message/detail`,state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                    &nbsp;<button onClick={()=>{this.pushShow(msgObj.id,msgObj.title)}}>push查看</button>
                                    &nbsp;<button onClick={()=>{this.replaceShow(msgObj.id,msgObj.title)}}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 传递参数  */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
                <Route path="/home/message/detail/" component={Detail}/>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>Go</button>&nbsp;
            </div>
        )
    }
}
