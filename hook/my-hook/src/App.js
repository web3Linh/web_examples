// import CounterClass from "./components/counterClass";
import CounterHook from './components/counterHook'
import Coffee from './components/coffee'
import Counter from './components/counter'
import Memoized from './components/memoized'
import MemoizeValue from './components/memoizeValue'

function App() {
  return (
    <div>
      <CounterHook initialState={100}/>
      <hr/>
      <Coffee/>
      <hr/>
      <Counter/>
      <hr/>
      <Memoized/>
      <hr/>
      <MemoizeValue/>
    </div>
  );
}

export default App;
