import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById('root'))

// 订阅redux里的更改
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'))
})
