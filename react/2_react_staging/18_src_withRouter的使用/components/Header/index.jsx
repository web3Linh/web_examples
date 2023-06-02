import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// withRouter -- 可以加工一般组件，让一般组件具有路由组件所特有的API
class Header extends Component {
    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
            </div>
        )
    }
}
// withRouter  的返回值是一个新组件
export default withRouter(Header)