import React from 'react'

import { Button, Counter } from 'sk-semantic-ui-react-component-library'
import 'sk-semantic-ui-react-component-library/dist/index.css'

const App = () => {
  return (
    <>
      <Button style={{ background: 'blue' }}>asdf</Button>
      <Counter initialCount={10} />
    </>
  )
}

export default App
