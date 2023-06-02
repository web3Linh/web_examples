import React from 'react'
import ReactDOM from 'react-dom'

// 1.类式组件 -- setState
// class Demo extends React.Component {
//   state = {
//     count:0
//   }
//   add = () => {
//     const {count} = this.state
//     this.setState({count: count + 1})
//   }
//   render() {
//     return (
//       <div>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>+1</button>
//       </div>
//     )
//   }
// }

// 2.类式组件 -- EffectHook
// class Demo extends React.Component {

//   state = {
//     count:0
//   }

//   // 容器
//   myContainer = React.createRef()

//   add = () => {
//     const {count} = this.state
//     this.setState({count: count + 1})
//   }

//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }

//   show = () => {
//     console.log(this.myContainer.current.value);
//   }

//   componentDidMount(){
//    this.timer = setInterval(()=>{
//         // this.setState({count: this.state.count + 1})
//         this.setState( state => ({count: state.count + 1}))
//     },1000)
//   }

//   // 组件即将卸载时   
//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

// // 1.函数式组件 -- setState
// function Demo(){
//     const [count, setCount] = React.useState(0)
//     // console.log(count, setCount)
//     // 加的回调
//     function add(){
//         // console.log('点我+1')
//         // 第一种写法
//         // setCount(count + 1)
//         // 第二种写法
//         // setCount((count) => {return count + 1})
//         setCount(count => count + 1)
//     }

//     const [name, setName] = React.useState('zhangzhang')

//     function changeName(){
//         setName('bobo')
//     }

//     return (
//         <div>
//             <h2>当前求和为：{count}</h2>
//             <button onClick={add}>+1</button>
//             <hr />
//             <h2>我的名字是：{name}</h2>
//             <button onClick={changeName}>改名</button>
//         </div>
//     )
// }

// // 2.函数式组件 -- EffectHook
function Demo(){
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    // console.log(count, setCount)
    // 加的回调
    function add(){
        // console.log('点我+1')
        // 第一种写法
        // setCount(count + 1)
        // 第二种写法
        // setCount((count) => {return count + 1})
        setCount(count => count + 1)
    }

    const [name, setName] = React.useState('zhangzhang')

    React.useEffect(() => {
        let timer = setInterval(() => {
          setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    },[])

    function changeName(){
        setName('bobo')
    }

    // 点击提示数据
    function show(){
        alert(myRef.current.value)
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
            <hr/>
            <h2>我的名字是：{name}</h2>
            <button onClick={changeName}>改名</button>
        </div>
    )
}
export default Demo