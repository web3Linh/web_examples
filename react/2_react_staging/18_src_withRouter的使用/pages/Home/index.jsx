import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <ul className="nav nav-tabs">
          {/* <li>
            <a className="list-group-item demo" href="./home-news.html">News</a>
          </li>
          <li>
            <a className="list-group-item " href="./home-message.html">Message</a>
          </li> */}
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Switch>
          <Route path="/home/message" component={Message} />
          <Route path="/home/news" component={News} />
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    )
  }
}
