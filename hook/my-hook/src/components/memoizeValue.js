import React, { useMemo, useState } from 'react'

export default function MemoizeValue() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [d, setD] = useState(0)

  const handleClick = (type) => {
    switch(type){
        case 'a':
            setA(a + 1)
        break;
        case 'b':
            setB(b + 1)
        break;
        case 'd':
            setD(d + 1)
        break;
        default:
            return false
    }
  }
  
//   const c = useMemo(() => {
//     console.log('useMemo')
//     return a + b
//   }, [a, b])

  const c = useMemo(() => {
    console.log('useMemo')
    return (
        <div>
            {a + b}
            <p>dom的输出</p>
        </div>
    )
 },[a, b])

  return (
    <div>
      <p>a: {a}</p>
      <p>b: {b}</p>
      c: {c}
      <p>d: {d}</p>

      <button onClick={() => {handleClick('a')}}>a</button>
      <button onClick={() => {handleClick('b')}}>b</button>
      <button onClick={() => {handleClick('d')}}>d</button>
    </div>
  )
}
