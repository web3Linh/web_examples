import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
        // Fragment只能拥有key属性
        <Fragment>
            <input type="text" />
            <input type="text" />
        </Fragment>
    )
  }
}
