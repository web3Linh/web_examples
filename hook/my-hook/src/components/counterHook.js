import React, { useEffect, useState } from 'react'

function Counter(props) {
    // 定义初始state -- count的初始值为0，setCount为改变count的函数
    // [状态，改变状态的函数]   
    const [count, setCount] = useState(() => {
        // initialState -- 如果更新的数据与上一次的数据相同则不再触发重新渲染
        if(props.initialState < 100){
            return props.initialState + 1
        } else {
            return props.initialState + 100
        }
    }) 
    const [name] = useState('allen')
    const [tc, setTc] = useState({ name: 'Tom', age: 18 })
    // 1.Hook不能在class中使用
    // 2.只能在函数最外层调用Hook。不能在循环、条件判断或子函数中调用
    // 3.只能在React的函数组件中调用Hook。不要在其他JavaScript函数中调用
    useEffect(function updateTittle(){
        document.title = name + count
        console.log(count, '更新后的count值');
    })

    useEffect(() => {
        console.log('开始监听')
        return () => {
            console.log('结束监听')
        }        
    })

    // 函数式更新
    const handleClick1 = () => {
        setCount(() => {
            if(count < 3){
               return count + 1
            } else {
                return count + 2
            }
        })
    }

    const handleClick2 = () => {
        setTc(() => {
            return {
                // 扩展运算符
                ...tc,
                name: 'Jerry'
            }
        })
    }

    return (
      <div>
        <p>Hook</p>
        <p>{count}</p>
        {/* <button onClick={() => { setCount(count + 1) }}>按钮</button> */}
        <button onClick={ handleClick1 }>按钮</button>
        <hr/>
        <p>{tc.name}</p>
        <p>{tc.age}</p>
        
        <button onClick={ handleClick2 }>变更</button>
      </div>
    )
}

export default Counter