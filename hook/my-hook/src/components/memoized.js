import React, { useCallback, useState } from 'react'

// 父组件
export default function Memoized() {
  const [ Fcount, setCount] = useState(1)
  // useCallback(函数，所依赖的更新值即数组) -- 返回一个具有记忆的函数
  // const handleClick = useCallback(() => {
  //   setCount(Fcount + 1)
  // }, [])

  const handleClick = () => {
    setCount(Fcount + 1)
  }

  const childClick = useCallback(() => {}, [])

  return (
    <div>
      <p>{Fcount}</p>
      <Child click={childClick}/>
      <button onClick={handleClick}>父组件新增</button>
    </div>
  )
}

// 子组件
// 如果传递进去的子组件更新时，其props值没有发生改变则不会触发子组件的更新
const Child = React.memo(
  function Child() {
    console.log('子组件被触发');
    return (
      <div>
        <p>hello, world!</p>
      </div>
    )
  }
)