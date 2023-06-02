import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users: [
        {id:'001', name:'tom', age:19},
        {id:'002', name:'jack', age:18},
        {id:'003', name:'zhangzhang', age:17},
    ]
  }


  componentDidCatch(){
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug解决');
  }

  render() {
    return (
      <div>
        <h3>我是Child组件</h3>
        {
            this.state.users.map((userObj) => {
                return <h4 key={userObj.id}>{userObj.name}------{userObj.age}</h4>
            })
        }
      </div>
    )
  }
}
