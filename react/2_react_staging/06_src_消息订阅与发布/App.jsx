import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    
    render() {
        return (
            <div className="container">
                <Search/>
                {/* 将传过来的users给list做展示--批量传递 */}
                <List/>
            </div>
        )
    }
}
