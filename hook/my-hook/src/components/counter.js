import React, { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        
        case 'decrement':
            return {count: state.count - 1};
        
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function init(initialCount){
    return {count: initialCount}
}

export default function Counter() {
  // useReducer(处理函数, 初始值, 惰性初始化传入的函数)
  // [count, dispatch] -- [当前的状态，改变这个状态的dispatch方法]  
  const [count, dispatch] = useReducer(reducer, 1, init)
  return (
    <div>
      {/* 在init中返回的是一个对象 所以为count.count */}
      <p>{count.count}</p>
      <button onClick={() => dispatch({type: 'reset', payload: 1})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
