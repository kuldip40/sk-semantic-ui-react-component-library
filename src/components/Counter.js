import React, { useState } from 'react'

const Counter = ({ initialCount = 1 }) => {
  const [count, setCount] = useState(initialCount)
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
