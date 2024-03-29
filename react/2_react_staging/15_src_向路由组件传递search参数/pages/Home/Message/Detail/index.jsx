import React, { Component } from 'react'
import qs from "querystring-es3"

const DetailData = [
    {id:'01', content:'你好，啵啵'},
    {id:'02', content:'你好，小张'},
    {id:'03', content:'你好，未来'}
]
export default class Detail extends Component {
  render() {
    // console.log(this.props)
    // 接收search参数
    const {search} = this.props.location
    const {id, title} = qs.parse(search.slice(1))

    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
