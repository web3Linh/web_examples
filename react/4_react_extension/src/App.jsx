import React, { Component, Fragment } from 'react'
import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
    render() {
        return (
            // 空标签里不能有任何属性
            <>
                {/* 若向子组件传递一个值 */}
                <Demo/>
            </>
        )
    }
}

