import React, { useReducer } from 'react'
import { themes, ThemeContext } from './context'
import Toolbar from './child/toolbar'

// 传入处理函数
// 触发dispatch时，会走到reducer
function reducer(state, action) {
   if(action.type === 'change'){
      return {
        ...state,
        dark: {
          color: 'red',
          background: '#222222'
        }
      }
   }
} 

export default function Coffee() {
  const [state, dispatch] = useReducer(reducer, themes)
  return (
    <ThemeContext.Provider value={dispatch}>
      <Toolbar data={state}/>
    </ThemeContext.Provider>
  )
}
