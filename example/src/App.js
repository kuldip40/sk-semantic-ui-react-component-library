import React from 'react'

import { SkButton, Counter } from 'sk-semantic-ui-react-component-library'
import 'sk-semantic-ui-react-component-library/dist/index.css'
import 'semantic-ui-less/semantic.less'

const App = () => {
  return (
    <>
      <SkButton primary>asdf</SkButton>
      <Counter initialCount={10} />
    </>
  )
}

export default App
