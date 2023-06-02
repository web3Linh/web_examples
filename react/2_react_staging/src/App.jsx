import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import { HeartTwoTone, SearchOutlined } from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <br />
        <Button type="primary">按钮</Button>
        <br />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <br />
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <DatePicker/>
      </div>
    )
  }
}
