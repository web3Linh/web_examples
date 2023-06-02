import React, { Component } from 'react'


const DetailData = [
    {id:'01', content:'你好，啵啵'},
    {id:'02', content:'你好，小张'},
    {id:'03', content:'你好，未来'}
]
export default class Detail extends Component {
  render() {
    // console.log(this.props)
    // 接收state参数
    // const {id, title} = this.props.match.params
    const {id, title} = this.props.location.state || {}

    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id
    }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
