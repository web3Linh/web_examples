import React, { useContext } from 'react'
import { ThemeContext } from '../context'

export default function themedButton({ data }) {
  // useContext -- 需要接收上下文的对象后，获取到返回的数据
  const dispatch = useContext(ThemeContext)
  // console.log(value, themes)
  return (
    // 从顶层组件接收到传递过来的样式
    <button style={data.dark} onClick={() => {dispatch({type:'change'})}}>hello,world!</button>
  )
}
