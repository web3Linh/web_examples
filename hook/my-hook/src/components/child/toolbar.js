import React from 'react'
import ThemedButton from './themedButton'

export default function Toolbar({ data }) {
  return (
    <div>
      <ThemedButton data={data}/>
    </div>
  )
}
