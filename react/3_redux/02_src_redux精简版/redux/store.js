// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
// 1.引入createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore } from "redux";
// 2.引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 3.暴露store
// const store = createStore(countReducer)
// export default store
export default createStore(countReducer) 
