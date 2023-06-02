// 该文件专门为Count组件生成action对象
import {INCREMENT, DECREMENT} from './constant'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步action--action的值为函数
export const createIncrementAsynAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}