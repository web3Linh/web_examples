// 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// reducer函数会接到两个参数，为别为：之前的状态（preState）以及动作对象（action）
const initState = 0
export default function countReducer(preState=initState, action){
    // 从action对象中获取：type、data
    const {type, data} = action 
    switch(type){
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}